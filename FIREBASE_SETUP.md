# 🔥 Firebase Backend Setup Guide

Your College Event Management app is now ready for Firebase! Here's the step-by-step setup:

---

## 📋 Step 1: Create Firebase Project

### 1.1 Go to Firebase Console
- Visit: https://console.firebase.google.com
- Click **"Add project"** or **"Create a project"**

### 1.2 Enter Project Details
```
Project Name: College Event Management
Google Analytics: Enable (optional)
```

### 1.3 Create Project
- Click **"Create project"**
- Wait for setup to complete (1-2 minutes)

---

## 🔐 Step 2: Get Firebase Credentials

### 2.1 Add Web App
- In Firebase Console, click **"+ Add app"**
- Select **"Web"** (</> icon)
- Enter app name: `college-event-app`
- Click **"Register app"**

### 2.2 Copy Config
You'll see a config object:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "123...",
  appId: "1:123:web:abc..."
};
```

### 2.3 Update `services/firebaseConfig.ts`
Replace `YOUR_API_KEY`, `YOUR_PROJECT`, etc. with your actual values

---

## 🗄️ Step 3: Setup Firestore Database

### 3.1 Create Firestore Database
- In Firebase Console, go to **"Firestore Database"**
- Click **"Create database"**
- Select **"Start in test mode"** (for development)
- Click **"Create"**

### 3.2 Set Security Rules (Later)
For production, set proper security rules:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /events/{document=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.token.admin == true;
    }
    match /registrations/{document=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

---

## 📦 Step 4: Install Firebase SDK

### Already installed! But if needed:
```powershell
npm install firebase
```

---

## 🎯 Step 5: Setup Database Collections

### Create Collections in Firebase Console:

#### Collection 1: `events`
Documents structure:
```json
{
  "title": "Tech Symposium 2026",
  "description": "Annual technical symposium...",
  "date": "2026-03-15",
  "time": "09:00 AM",
  "location": "Main Auditorium",
  "capacity": 500,
  "registered": 342,
  "organizer": "Dr. Amit Kumar"
}
```

#### Collection 2: `registrations`
Documents structure:
```json
{
  "eventId": "event_id_here",
  "studentName": "Rahul Sharma",
  "studentId": "CS2022001",
  "email": "rahul@college.edu",
  "phone": "+91-9876543210",
  "department": "Computer Science",
  "year": "3rd Year",
  "registeredAt": "2026-02-08T10:30:00Z"
}
```

---

## 🔌 Step 6: Integrate with React App

### Option A: Use Firebase (New)
```typescript
// In your components:
import { getEvents, addEvent, registerUserForEvent } from '../services/eventService';

// Fetch events from Firebase
const fetchEvents = async () => {
  try {
    const events = await getEvents();
    setEvents(events);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### Option B: Keep Mock Data (Testing)
Keep using `mockData.ts` while setting up

---

## 🔐 Step 7: Setup Authentication (Optional)

### Enable Sign-in Methods
- Go to **"Authentication"** → **"Sign-in method"**
- Enable:
  - Email/Password
  - Google (for easy login)

### Use in App:
```typescript
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';

// Sign up
const signup = async (email: string, password: string) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};
```

---

## ✅ Step 8: Verify Setup

### Test Connection
```typescript
import { db } from './services/firebaseConfig';
import { getDocs, collection } from 'firebase/firestore';

// In your component or console:
const testConnection = async () => {
  const events = await getDocs(collection(db, 'events'));
  console.log('Connected to Firebase!', events.size, 'events');
};
```

---

## 🚀 Step 9: Deploy with Backend

### Deploy to Vercel
```powershell
vercel
```

### Environment Variables
Add to Vercel:
- `VITE_FIREBASE_API_KEY=YOUR_API_KEY`
- `VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID`
- etc.

Update `firebaseConfig.ts`:
```typescript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // ... rest of config
};
```

---

## 📊 Available Functions

### Events
```typescript
getEvents()                    // Get all events
addEvent(event)               // Create new event
updateEvent(id, event)        // Update event
deleteEvent(id)               // Delete event
```

### Registrations
```typescript
getRegistrations()            // Get all registrations
getEventRegistrations(eventId) // Get registrations for event
addRegistration(registration) // Register user
deleteRegistration(id)        // Cancel registration
registerUserForEvent(...)     // Register and update event count
```

---

## 🎓 Quick Start Example

```typescript
import { getEvents, registerUserForEvent } from '../services/eventService';

// Fetch events
const events = await getEvents();

// Register user
const registrationId = await registerUserForEvent(
  'event_id',
  'Rahul Sharma',
  'CS2022001',
  'rahul@college.edu',
  '+91-9876543210',
  'Computer Science',
  '3rd Year'
);
```

---

## ⚠️ Important Notes

1. **Security Rules**: Switch from "Test Mode" to production rules before launch
2. **Authentication**: Set up auth to prevent unauthorized access
3. **Backups**: Firebase auto-backs up your data
4. **Costs**: Free tier covers most uses, scales as needed
5. **Rate Limits**: 20k reads/day free tier

---

## 🆘 Troubleshooting

**Error: "Missing or insufficient permissions"**
- Check Firestore security rules
- Ensure you're signed in

**Error: "Firebase app not initialized"**
- Verify firebaseConfig.ts has correct credentials
- Check internet connection

**Data not syncing**
- Check browser console for errors
- Verify collection names match exactly

---

## 📚 Useful Links

- Firebase Docs: https://firebase.google.com/docs
- Firestore Guide: https://firebase.google.com/docs/firestore
- React + Firebase: https://firebase.google.com/docs/database/web/start
- Security Rules: https://firebase.google.com/docs/rules

---

## ✨ Next Steps

1. ✅ Create Firebase project
2. ✅ Get credentials
3. ✅ Setup Firestore collections
4. ✅ Update firebaseConfig.ts with your credentials
5. ✅ Test connection
6. ✅ Replace mock data with Firebase calls
7. ✅ Deploy to Vercel with environment variables

**Your app is now ready for a real backend!**

Questions? Check the code in:
- `services/firebaseConfig.ts` - Firebase setup
- `services/eventService.ts` - All database functions
