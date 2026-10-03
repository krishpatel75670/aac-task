# 🌌 Astrofest – AAC NITK

Event website and registration system for **Astrofest 2025** by the Amateur Astronomy Club, NITK Surathkal.

---

## Stack

| Layer | Tech |
|-------|------|
| Frontend | React + Vite → deployed on **Vercel** |
| Backend | FastAPI (Python 3.12) → deployed on **Render** |
| Database | **Neon PostgreSQL** (prod) / SQLite (dev fallback) |
| Container | Docker + Docker Compose (local / self-hosted) |

---

## Live Deployment

| Service | Platform | Notes |
|---------|----------|-------|
| Frontend | Vercel | Auto-deploys on push to `main` |
| Backend | Render | Docker-based, auto-deploys on push |
| Database | Neon | Serverless PostgreSQL, always-on |

---

## Quick Start (Local Dev)

### 1. Backend

```bash
cd backend
cp .env.example .env        # fill in your values (see Environment Variables below)
pip install -r requirements.txt
uvicorn app.main:app --reload
# → http://localhost:8000
# → http://localhost:8000/docs  (Swagger UI)
```

### 2. Frontend

```bash
cd frontend
cp .env.example .env.local  # set VITE_API_URL=http://localhost:8000
npm install
npm run dev
# → http://localhost:5173
```

### 3. Docker (all services locally)

```bash
cp backend/.env.example backend/.env   # fill in secrets
docker-compose up --build
# Frontend → http://localhost:3000
# Backend  → http://localhost:8000
```

---

## Environment Variables

> ⚠️ **Never commit real credentials.** Only `.env.example` files (with placeholders) are tracked by git.  
> Set actual secrets in **Render → Environment** and **Vercel → Environment Variables**.

### `backend/.env`

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | Neon / Postgres connection string | `postgresql://user:pass@host/db?sslmode=require` |
| `SECRET_KEY` | Long random secret string | `openssl rand -hex 32` |
| `FRONTEND_ORIGIN` | Your Vercel app URL (for CORS) | `https://your-app.vercel.app` |
| `APP_ENV` | `development` or `production` | `production` |
| `SMTP_HOST` | Optional – SMTP server for emails | `smtp.gmail.com` |
| `SMTP_PORT` | Optional – SMTP port | `587` |
| `SMTP_USER` | Optional – SMTP login email | `you@gmail.com` |
| `SMTP_PASSWORD` | Optional – SMTP app password | `your-app-password` |
| `SMTP_FROM` | Optional – From address | `noreply@astrofest.nitk.edu.in` |

### `frontend/.env.local`

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend base URL | `https://your-backend.onrender.com` |

---

## Deploying to Production

### Backend → Render

1. Connect your GitHub repo to Render
2. Create a new **Web Service** using the `backend/Dockerfile`
3. Add these **Environment Variables** in Render dashboard:
   - `DATABASE_URL` → your Neon connection string
   - `SECRET_KEY` → a long random secret
   - `FRONTEND_ORIGIN` → your Vercel frontend URL
   - `APP_ENV` → `production`

### Frontend → Vercel

1. Import repo into Vercel
2. Set **root directory** to `frontend/`
3. Add environment variable:
   - `VITE_API_URL` → your Render backend URL (e.g. `https://astrofest-backend.onrender.com`)

### Database → Neon

1. Create a project at [neon.tech](https://neon.tech)
2. Copy the **connection string** from the Neon dashboard
3. Paste it as `DATABASE_URL` in Render's environment variables

---

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/v1/registrations/` | Submit a registration |
| `GET` | `/api/v1/registrations/` | List all registrations (admin) |
| `GET` | `/api/v1/registrations/count` | Total count (admin) |
| `GET` | `/health` | Health check |

Swagger UI available at `/docs` on the backend URL.

---

## Project Structure

```
aac-task/
├── frontend/              # React + Vite app
│   ├── src/
│   ├── .env.example
│   └── Dockerfile
├── backend/               # FastAPI app
│   ├── app/
│   │   ├── main.py
│   │   ├── config.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── crud.py
│   │   └── routers/
│   ├── .env.example
│   ├── Dockerfile
│   └── requirements.txt
├── Nginx/
├── docker-compose.yml
└── .gitignore
```

---

## Security Notes

- `.env` files are **git-ignored** — never commit them
- `.env.example` files contain **placeholder values only** — safe to commit
- All secrets (DB credentials, secret key) must be set via your hosting platform's env var UI
- CORS is locked to `FRONTEND_ORIGIN` — set it to your exact Vercel URL

---

*Made with ☄️ by AAC NITK*
