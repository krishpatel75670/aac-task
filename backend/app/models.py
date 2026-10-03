from datetime import datetime, timezone

from sqlalchemy import Column, DateTime, Integer, String, Text

from app.database import Base


class Registration(Base):
    """Stores every registration submitted via the Astrofest form."""

    __tablename__ = "registrations"

    id = Column(Integer, primary_key=True, index=True)

    # Personal info
    full_name = Column(String(120), nullable=False)
    email = Column(String(200), nullable=False, index=True)
    roll_number = Column(String(50), nullable=False, index=True)
    phone = Column(String(15), nullable=False)
    branch = Column(String(20), nullable=False)
    year = Column(String(30), nullable=False)

    # Event participation (comma-separated event IDs)
    events = Column(String(500), nullable=False)

    # Optional fields
    team_name = Column(String(100), nullable=True)
    experience = Column(Text, nullable=True)

    # Audit
    registered_at = Column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        nullable=False,
    )
