# API Integration Guide

Connect your React frontend to the Cloud App Engine backend.

## 🔌 Integration Steps

### 1. Create API Service
Create `services/apiService.ts`:

```typescript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export const apiClient = {
  // Events
  async getEvents() {
    const res = await fetch(`${API_URL}/api/events`);
    return res.json();
  },

  async getEvent(id: string) {
    const res = await fetch(`${API_URL}/api/events/${id}`);
    return res.json();
  },

  async createEvent(event: any) {
    const res = await fetch(`${API_URL}/api/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    });
    return res.json();
  },

  async updateEvent(id: string, event: any) {
    const res = await fetch(`${API_URL}/api/events/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    });
    return res.json();
  },

  async deleteEvent(id: string) {
    const res = await fetch(`${API_URL}/api/events/${id}`, {
      method: 'DELETE'
    });
    return res.json();
  },

  // Registrations
  async getRegistrations() {
    const res = await fetch(`${API_URL}/api/registrations`);
    return res.json();
  },

  async getEventRegistrations(eventId: string) {
    const res = await fetch(`${API_URL}/api/events/${eventId}/registrations`);
    return res.json();
  },

  async registerUser(registration: any) {
    const res = await fetch(`${API_URL}/api/registrations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registration)
    });
    return res.json();
  },

  async cancelRegistration(id: string) {
    const res = await fetch(`${API_URL}/api/registrations/${id}`, {
      method: 'DELETE'
    });
    return res.json();
  }
};
```

### 2. Use in Components

```typescript
import { apiClient } from '../services/apiService';

// In your component:
useEffect(() => {
  const fetchEvents = async () => {
    try {
      const events = await apiClient.getEvents();
      setEvents(events);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  fetchEvents();
}, []);
```

### 3. Environment Variables

Create `.env.local`:
```
VITE_API_URL=http://localhost:8080
```

After deployment, update to:
```
VITE_API_URL=https://college-event-backend-XXXX.appspot.com
```

---

## 🚀 Deployment Flow

1. **Backend deployed** to Cloud App Engine
   - API URL: `https://college-event-backend-XXXX.appspot.com`

2. **Frontend deployed** to Vercel
   - Points to backend API URL

3. **Data flow**:
   - User interacts with React app
   - Frontend calls backend API
   - Backend reads/writes to Firestore
   - Response sent back to frontend

---

## 📊 Architecture

```
┌─────────────┐
│   Frontend  │
│   (Vercel)  │
└──────┬──────┘
       │ HTTP
       ▼
┌─────────────────┐
│  Backend API    │
│ (App Engine)    │
└──────┬──────────┘
       │ Admin SDK
       ▼
┌─────────────┐
│  Firestore  │
│   Database  │
└─────────────┘
```

---

## ✅ Testing API

### Local Testing
```bash
# Start backend
cd backend
npm run dev

# In another terminal, test:
curl http://localhost:8080/health
curl http://localhost:8080/api/events
```

### Production Testing
```bash
# After deployment:
curl https://college-event-backend-XXXX.appspot.com/health
curl https://college-event-backend-XXXX.appspot.com/api/events
```

---

## 🔒 CORS Configuration

Backend has CORS enabled for all origins. For production, restrict to:

```typescript
const allowedOrigins = [
  'https://college-event.vercel.app',
  'http://localhost:5173'
];

app.use(cors({
  origin: allowedOrigins
}));
```

---

Ready to connect! 🎉
