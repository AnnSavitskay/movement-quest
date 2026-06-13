# 🌿 Movement Quest

A web app for tracking physical activities and monitoring how movement affects your mood. Log workouts, see mood trends over time, track your streak, and get a daily challenge to keep you motivated.

> Built with the help of [Claude Code](https://claude.ai/code) by Anthropic.

---

## Features

- Log activities (walking, cycling, swimming, stretching) with duration and mood ratings
- Dashboard with total activity count and average mood gain
- Mood Before vs After chart (line graph)
- Current streak tracker
- Daily challenge — changes every day
- Full activity history table

---

## Project Structure

```
movement-quest/
├── backend/
│   ├── app.py                  # Flask app entry point
│   ├── database.py             # SQLAlchemy engine & session
│   ├── models/
│   │   └── activity.py         # Activity model
│   ├── routes/
│   │   └── activities.py       # API routes
│   └── venv/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ActivityForm.jsx
│   │   │   ├── ActivityTable.jsx
│   │   │   ├── DashboardCards.jsx
│   │   │   ├── MoodChart.jsx
│   │   │   ├── StreakCard.jsx
│   │   │   └── ChallengeCard.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## Prerequisites

| Tool | Version | Download |
|------|---------|----------|
| Python | 3.10+ | https://python.org |
| Node.js | 18+ | https://nodejs.org |
| PostgreSQL | 14+ | https://postgresql.org |

---

## Step 1 — Set up PostgreSQL

### Linux / macOS
```bash
# Ubuntu/Debian:
sudo apt install postgresql
sudo service postgresql start

# macOS (Homebrew):
brew install postgresql@14
brew services start postgresql@14

# Create user and database
psql -U postgres -c "CREATE USER movement_user WITH PASSWORD '123456';"
psql -U postgres -c "CREATE DATABASE movementquest OWNER movement_user;"
```

### Windows
1. Download and install PostgreSQL from https://postgresql.org/download/windows/
2. Open **pgAdmin** or **SQL Shell (psql)** and run:
```sql
CREATE USER movement_user WITH PASSWORD '123456';
CREATE DATABASE movementquest OWNER movement_user;
```

---

## Step 2 — Start the backend

### Linux / macOS
```bash
cd movement-quest/backend

# Create virtual environment
python3 -m venv venv

# Activate it
source venv/bin/activate

# Install dependencies
pip install flask flask-cors sqlalchemy psycopg2-binary

# Start the server
python app.py
```

### Windows
```cmd
cd movement-quest\backend

python -m venv venv
venv\Scripts\activate

pip install flask flask-cors sqlalchemy psycopg2-binary

python app.py
```

The API will be available at `http://127.0.0.1:5000`

> The database tables are created automatically on first run — no migrations needed.

---

## Step 3 — Start the frontend

Open a **new terminal window**.

### Linux / macOS
```bash
cd movement-quest/frontend

npm install
npm run dev
```

### Windows
```cmd
cd movement-quest\frontend

npm install
npm run dev
```

The app will be available at `http://localhost:5173`

---

## Summary — terminals needed

| Terminal | Directory | Command |
|----------|-----------|---------|
| 1 — Backend | `movement-quest/backend` | `python app.py` |
| 2 — Frontend | `movement-quest/frontend` | `npm run dev` |

---

## Database connection

Configured in `backend/database.py`:

```
postgresql://movement_user:123456@localhost/movementquest
```

If you use different credentials, update that file accordingly.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/activities` | Log a new activity |
| GET | `/activities` | Get all activities |

---

## Troubleshooting

**`psycopg2` install fails on Linux:**
```bash
sudo apt install libpq-dev python3-dev
pip install psycopg2-binary
```

**`psycopg2` install fails on macOS:**
```bash
brew install libpq
pip install psycopg2-binary
```

**Port 5000 already in use on macOS** (AirPlay uses port 5000):
```bash
# Disable AirPlay Receiver in System Settings → General → AirDrop & Handoff
# or change the port in backend/app.py:
app.run(debug=True, port=5001)
# and update the API URL in all frontend components:
# http://127.0.0.1:5001/activities
```

**Port 5000 already in use on Linux/Windows:**
```bash
# Linux/macOS
lsof -i :5000
kill -9 <PID>

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**`npm run dev` fails — Node version too old:**
```bash
node --version   # should be 18+

# Update via nvm (Linux/macOS):
nvm install 18
nvm use 18
```

**Cannot connect to PostgreSQL:**
```bash
# Check that PostgreSQL is running
# Linux:
sudo service postgresql status

# macOS:
brew services list | grep postgresql

# Verify credentials work:
psql -U movement_user -d movementquest -h localhost
```
