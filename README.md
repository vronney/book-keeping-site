# book-keeping-site

Marketing site and API for Harper Ledger bookkeeping services.

## Frontend (Next.js)

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the marketing site.

## Backend (FastAPI)

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

The API exposes:
- `GET /health`
- `GET /api/health`
- `GET /api/secure/profile` (requires an Okta JWT)

## Configuration

Create a `.env` file in `backend/` with your Okta and Postgres settings:

```bash
OKTA_ISSUER=https://your-okta-domain/oauth2/default
OKTA_AUDIENCE=api://default
DATABASE_URL=postgresql+psycopg2://postgres:postgres@localhost:5432/bookkeeping
```

Set the frontend environment variable for API access:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```
