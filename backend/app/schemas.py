from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, EmailStr, field_validator


# ── Request schema (what the frontend sends) ──────────────────────────────────

class RegistrationCreate(BaseModel):
    fullName: str
    email: EmailStr
    rollNumber: str
    phone: str
    branch: str
    year: str
    events: List[str]          # list of event IDs
    teamName: Optional[str] = None
    experience: Optional[str] = None
    agreeTerms: bool

    @field_validator("phone")
    @classmethod
    def phone_must_be_10_digits(cls, v: str) -> str:
        digits = v.strip()
        if not digits.isdigit() or len(digits) != 10:
            raise ValueError("Phone must be exactly 10 digits")
        return digits

    @field_validator("events")
    @classmethod
    def at_least_one_event(cls, v: List[str]) -> List[str]:
        if not v:
            raise ValueError("Select at least one event")
        return v

    @field_validator("agreeTerms")
    @classmethod
    def must_agree(cls, v: bool) -> bool:
        if not v:
            raise ValueError("You must agree to the terms")
        return v


# ── Response schemas ───────────────────────────────────────────────────────────

class RegistrationOut(BaseModel):
    id: int
    full_name: str
    email: str
    roll_number: str
    phone: str
    branch: str
    year: str
    events: List[str]
    team_name: Optional[str]
    experience: Optional[str]
    registered_at: datetime

    model_config = {"from_attributes": True}

    @field_validator("events", mode="before")
    @classmethod
    def parse_events(cls, v):
        """Events are stored as comma-separated string in DB."""
        if isinstance(v, str):
            return [e.strip() for e in v.split(",") if e.strip()]
        return v


class RegistrationResponse(BaseModel):
    success: bool
    message: str
    data: Optional[RegistrationOut] = None


class MessageResponse(BaseModel):
    success: bool
    message: str
