# College Event Backend - Google Cloud App Engine

Complete backend API for College Event Management system running on Google Cloud App Engine.

## 🚀 Quick Start

### 1. Setup Service Account
- Go to: https://console.cloud.google.com/apis/credentials
- Click **"+ Create Credentials"** → **"Service Account"**
- Fill details:
  - Service Account Name: `college-event-backend`
  - Click **"Create and Continue"**
- Grant role: **"Firebase Admin"**
- Click **"Create Key"** → **"JSON"**
- Save as `firebase-service-account.json` in `backend/` folder

### 2. Install Dependencies
```powershell
cd backend
npm install
```

### 3. Run Locally
```powershell
npm run dev
```
Visit: `http://localhost:8080`

### 4. Deploy to App Engine
```powershell
# Install Google Cloud CLI from: https://cloud.google.com/sdk/docs/install

gcloud auth login
gcloud config set project college-event-system-b712f
gcloud app deploy
```

---

## 📚 API Endpoints

### Health Check
```
GET /health
```
Response: `{ status: "Backend is running!" }`

### Events

**Get all events**
```
GET /api/events
```

**Get single event**
```
GET /api/events/:id
```

**Create event**
```
POST /api/events
Body: {
  "title": "Tech Symposium",
  "description": "Annual tech event",
  "date": "2026-03-15",
  "time": "09:00 AM",
  "location": "Main Auditorium",
  "capacity": 500,
  "organizer": "Dr. Amit Kumar"
}
```

**Update event**
```
PUT /api/events/:id
Body: { "registered": 350 }
```

**Delete event**
```
DELETE /api/events/:id
```

### Registrations

**Get all registrations**
```
GET /api/registrations
```

**Get event registrations**
```
GET /api/events/:eventId/registrations
```

**Register user**
```
POST /api/registrations
Body: {
  "eventId": "event_id",
  "studentName": "Rahul Sharma",
  "studentId": "CS2022001",
  "email": "rahul@college.edu",
  "phone": "+91-9876543210",
  "department": "Computer Science",
  "year": "3rd Year"
}
```

**Cancel registration**
```
DELETE /api/registrations/:id
```

---

## 🔧 Environment Variables

Create `.env` file in `backend/`:
```
PORT=8080
PROJECT_ID=college-event-system-b712f
```

---

## 📊 Database Schema

### Events Collection
```json
{
  "title": "string",
  "description": "string",
  "date": "YYYY-MM-DD",
  "time": "HH:MM AM/PM",
  "location": "string",
  "capacity": "number",
  "registered": "number",
  "organizer": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Registrations Collection
```json
{
  "eventId": "string",
  "studentName": "string",
  "studentId": "string",
  "email": "string",
  "phone": "string",
  "department": "string",
  "year": "string",
  "registeredAt": "timestamp"
}
```

---

## 🔐 Security Features

1. **Auto-increment registration count** - Happens when user registers
2. **Duplicate prevention** - Can't register twice for same event
3. **Automatic timestamps** - All actions timestamped
4. **Error handling** - Comprehensive error responses

---

## 📡 Connect Frontend to Backend

Update your frontend API calls:

```typescript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

// Fetch events from backend
fetch(`${API_URL}/api/events`)
  .then(res => res.json())
  .then(events => setEvents(events));

// Register user
fetch(`${API_URL}/api/registrations`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    eventId: 'event_id',
    studentName: 'Name',
    // ... other fields
  })
})
  .then(res => res.json())
  .then(registration => console.log('Registered!', registration));
```

---

## 🌐 Deployment

### Deploy to App Engine
```powershell
gcloud app deploy
```

### URL Format
```
https://college-event-backend-XXXX.appspot.com
```

### View Logs
```powershell
gcloud app logs read -f
```

### Scale Settings
Edit `app.yaml`:
```yaml
automatic_scaling:
  min_instances: 1
  max_instances: 10
```

---

## 💰 Pricing

**Google Cloud App Engine:**
- Free tier: 28 free instance hours/day
- Standard: $0.05/hour per instance
- Typical college event app: ~$5-10/month

---

## 🚨 Troubleshooting

**Error: "Permission denied"**
- Download service account JSON again
- Ensure file is named `firebase-service-account.json`

**Error: "Cannot find module"**
```powershell
npm install
```

**Error: "Port already in use"**
```powershell
# Change PORT in .env or use different port
PORT=3000 npm run dev
```

**App not responding after deploy**
```powershell
gcloud app logs read -f
# Check logs for errors
```

---

## 📚 Useful Links

- Google Cloud Console: https://console.cloud.google.com
- App Engine Docs: https://cloud.google.com/appengine/docs
- Firebase Admin SDK: https://firebase.google.com/docs/database/admin/start
- Firestore Security: https://firebase.google.com/docs/rules

---

## ✅ Deployment Checklist

- [ ] Created service account and downloaded JSON
- [ ] Placed `firebase-service-account.json` in `backend/` folder
- [ ] Ran `npm install` successfully
- [ ] Tested locally with `npm run dev`
- [ ] Health check returns 200: `GET /health`
- [ ] Can fetch events: `GET /api/events`
- [ ] Installed Google Cloud CLI
- [ ] Authenticated with `gcloud auth login`
- [ ] Deployed with `gcloud app deploy`
- [ ] App is live and responding

---

**Your backend is ready for production!** 🎉
