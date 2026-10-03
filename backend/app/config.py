from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # Database
    DATABASE_URL: str = "sqlite:///./astrofest.db"  # fallback for local dev

    # App
    APP_ENV: str = "development"
    SECRET_KEY: str = "change-me-in-production"

    # CORS
    FRONTEND_ORIGIN: str = "http://localhost:3000"

    # Optional: Email (SMTP) – fill in .env for production
    SMTP_HOST: str = ""
    SMTP_PORT: int = 587
    SMTP_USER: str = ""
    SMTP_PASSWORD: str = ""
    SMTP_FROM: str = "noreply@astrofest.nitk.edu.in"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )


settings = Settings()
