from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.database import Base, engine
from app.routers import registrations


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Create all tables on startup (idempotent – safe to run each restart)
    Base.metadata.create_all(bind=engine)
    yield


app = FastAPI(
    title="Astrofest API",
    description="Backend for the Astrofest 2025 event registration system – AAC NITK",
    version="1.0.0",
    lifespan=lifespan,
)

# ── CORS ──────────────────────────────────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_ORIGIN],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Routers ───────────────────────────────────────────────────────────────────
app.include_router(registrations.router, prefix="api/v1")


# ── Health check ──────────────────────────────────────────────────────────────
@app.get("/health", tags=["health"])
def health():
    return {"status": "ok", "env": settings.APP_ENV}
