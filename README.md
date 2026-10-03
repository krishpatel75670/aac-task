# 🌌 Astrofest – AAC NITK

Event website and registration system for **Astrofest 2025** by the Amateur Astronomy Club, NITK Surathkal.

---

## Stack

| Layer | Tech |
|-------|------|
| Frontend | React + Vite |
| Backend | FastAPI (Python 3.12) |
| Database | PostgreSQL (prod) / SQLite (dev) |
| Container | Docker + Docker Compose |

---

## Quick Start

### 1. Backend (local dev)

```bash
cd backend
cp .env.example .env        # fill in values
pip install -r requirements.txt
uvicorn app.main:app --reload
# → http://localhost:8000
# → http://localhost:8000/docs  (Swagger UI)
```

### 2. Frontend (local dev)

```bash
cd frontend
cp .env.example .env.local  # set VITE_API_URL=http://localhost:8000
npm install
npm run dev
# → http://localhost:5173
```

### 3. Docker (all services)

```bash
cp backend/.env.example backend/.env   # fill in secrets
docker-compose up --build
# Frontend → http://localhost:3000
# Backend  → http://localhost:8000
```

---

## Environment Variables

### `backend/.env`

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Postgres URL (`postgresql://user:pass@host:5432/db`) |
| `SECRET_KEY` | Long random secret |
| `FRONTEND_ORIGIN` | Frontend URL for CORS (e.g. `https://astrofest.nitk.edu.in`) |
| `APP_ENV` | `development` or `production` |
| `SMTP_*` | Optional – for confirmation emails |

### `frontend/.env.local`

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend base URL (e.g. `http://localhost:8000`) |

> **Never commit `.env` files.** Only `.env.example` files are tracked by git.

---

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/v1/registrations/` | Submit registration |
| `GET` | `/api/v1/registrations/` | List all (admin) |
| `GET` | `/api/v1/registrations/count` | Total count (admin) |
| `GET` | `/health` | Health check |

---

## Project Structure

```
aas_task/
├── frontend/          # React + Vite app
├── backend/           # FastAPI app
│   ├── app/
│   │   ├── main.py
│   │   ├── config.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── crud.py
│   │   └── routers/
│   ├── .env.example
│   └── requirements.txt
├── docker-compose.yml
└── .gitignore
```

---

*Made with ☄️ by AAC NITK*
