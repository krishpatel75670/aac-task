from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import crud, schemas
from app.database import get_db

router = APIRouter(prefix="/registrations", tags=["registrations"])


@router.post(
    "/",
    response_model=schemas.RegistrationResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Submit a new registration",
)
def register(payload: schemas.RegistrationCreate, db: Session = Depends(get_db)):
    """
    Accepts the Astrofest registration form and stores it in the database.

    - Rejects duplicate emails or roll numbers.
    - All validation (phone format, event selection, terms) also happens here.
    """
    # Duplicate email check
    if crud.get_registration_by_email(db, payload.email):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="An account with this email is already registered.",
        )

    # Duplicate roll number check
    if crud.get_registration_by_roll(db, payload.rollNumber):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="This roll number is already registered.",
        )

    reg = crud.create_registration(db, payload)
    return schemas.RegistrationResponse(
        success=True,
        message=f"Welcome to Astrofest 2025, {reg.full_name}! See you at NITK Surathkal.",
        data=schemas.RegistrationOut.model_validate(reg),
    )


# ── Admin / read endpoints ────────────────────────────────────────────────────
# Protect these with your auth layer / reverse-proxy in production.

@router.get(
    "/",
    response_model=List[schemas.RegistrationOut],
    summary="[Admin] List all registrations",
)
def list_registrations(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
):
    return crud.get_all_registrations(db, skip=skip, limit=limit)


@router.get(
    "/count",
    summary="[Admin] Total registration count",
)
def registration_count(db: Session = Depends(get_db)):
    return {"count": crud.get_registration_count(db)}
