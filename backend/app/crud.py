from typing import List

from sqlalchemy.orm import Session

from app import models, schemas


def create_registration(db: Session, data: schemas.RegistrationCreate) -> models.Registration:
    """Persist a new registration to the database."""
    db_reg = models.Registration(
        full_name=data.fullName,
        email=data.email,
        roll_number=data.rollNumber,
        phone=data.phone,
        branch=data.branch,
        year=data.year,
        events=",".join(data.events),  # store as CSV
        team_name=data.teamName or None,
        experience=data.experience or None,
    )
    db.add(db_reg)
    db.commit()
    db.refresh(db_reg)
    return db_reg


def get_registration_by_email(db: Session, email: str) -> models.Registration | None:
    return db.query(models.Registration).filter(models.Registration.email == email).first()


def get_registration_by_roll(db: Session, roll_number: str) -> models.Registration | None:
    return (
        db.query(models.Registration)
        .filter(models.Registration.roll_number == roll_number)
        .first()
    )


def get_all_registrations(
    db: Session, skip: int = 0, limit: int = 100
) -> List[models.Registration]:
    return db.query(models.Registration).order_by(models.Registration.id).offset(skip).limit(limit).all()


def get_registration_count(db: Session) -> int:
    return db.query(models.Registration).count()
