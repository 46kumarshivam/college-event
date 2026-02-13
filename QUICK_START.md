# 🚀 Quick Start Navigation

Easy reference for finding things in your project.

---

## 🎯 I Want To...

### 1. **See the app running** 
```bash
npm run dev
# Opens at: http://localhost:5173
```

### 2. **Change colors**
File: `tailwind.config.js` (lines 10-50)
```javascript
primary: { 500: '#2563EB' }  ← Change blue here
secondary: '#22C55E'         ← Change green here
highlight: '#6366F1'         ← Change purple here
```

### 3. **Change fonts/sizes**
File: `tailwind.config.js` (lines 51-100)
```javascript
'h1': ['48px', { lineHeight: '56px' }]  ← H1 size
'h2': ['36px', { lineHeight: '44px' }]  ← H2 size
```

### 4. **Add new button style**
Files: 
- `components/ui/button.tsx` (component)
- `styles/globals.css` (CSS class)

### 5. **Make backend changes**
File: `backend/server.js`
- Lines 1-50: Setup
- Lines 51-150: Events API
- Lines 151-250: Registrations API

### 6. **Deploy to internet**
See: `DEPLOYMENT_GUIDE.md`
```bash
# Option 1: Local network
# Use IP: http://10.192.155.133:5173

# Option 2: Vercel (free)
vercel
```

### 7. **Deploy with Docker**
```bash
cd backend
docker-compose up
# Opens at: http://localhost:8080
```

### 8. **Deploy with Kubernetes**
See: `DEVOPS_GUIDE.md` 
```bash
kubectl apply -f k8s/
```

### 9. **Understand design system**
Read: `COLOR_PALETTE_UPDATED.md` + `TYPOGRAPHY_UPDATED.md`

### 10. **Setup Firebase database**
See: `FIREBASE_SETUP.md`

---

## 📁 File Tree (Visual)

```
College Event App
│
├─ 👁️ Frontend (What users see)
│  ├─ App.tsx              ← Main page
│  ├─ components/          ← Buttons, cards, etc
│  ├─ styles/globals.css   ← All styling
│  └─ data/mockData.ts     ← Sample data
│
├─ 🔧 Backend (What processes data)
│  └─ backend/
│     └─ server.js         ← API endpoints
│
├─ ☸️ Cloud Deployment (How it runs)
│  ├─ k8s/                 ← Kubernetes setup
│  ├─ terraform/           ← Cloud infrastructure
│  └─ Jenkinsfile          ← Automated deployment
│
└─ 📚 Documentation (How to use it)
   ├─ PROJECT_STRUCTURE.md ← You are here
   ├─ DEVOPS_GUIDE.md      ← Full pipeline
   ├─ DEPLOYMENT_GUIDE.md  ← How to deploy
   └─ ... (10+ more guides)
```

---

## 🎨 Design System Quick Reference

### Colors (Edit in `tailwind.config.js`)
```
Primary Blue:    #2563EB  (Buttons, Links)
Secondary Green: #22C55E  (Success, Certificates)
Highlight Purple: #6366F1 (Accents, Icons)
Error Red:       #EF4444  (Delete, Errors)
Warning Orange:  #F59E0B  (Warnings, Almost full)
Info Cyan:       #0EA5E9  (Info messages)
```

### Typography (Edit in `tailwind.config.js`)
```
H1: 48px  (Page titles)
H2: 36px  (Section titles)
H3: 28px  (Card titles)
H4: 22px  (Component titles)
Body: 16px (Regular text)
Small: 14px (Helper text)
```

---

## 🔄 Common Workflows

### Workflow 1: Change App Color

1. Open: `tailwind.config.js`
2. Find: `primary: { 500: '#2563EB' }`
3. Change: `'#2563EB'` to your color
4. Save: Auto-refreshes in browser
5. Done! ✅

### Workflow 2: Add New Event Type

1. Open: `types/index.ts`
2. Edit: `Event` interface
3. Add: New field
4. Save: Auto-applies everywhere
5. Done! ✅

### Workflow 3: Deploy to Internet

1. Go to: `DEPLOYMENT_GUIDE.md`
2. Choose: Option 1 (local) or Option 2 (Vercel)
3. Follow: Step-by-step instructions
4. Get: Public URL
5. Share: With anyone! ✅

### Workflow 4: Setup Backend

1. Go to: `backend/` folder
2. Follow: `backend/README.md`
3. Run: `npm run dev`
4. Test: `curl http://localhost:8080/health`
5. Done! ✅

---

## 📊 File Sizes

| What | Size | Where |
|-----|------|-------|
| Frontend build | 300KB gzipped | `dist/` |
| Backend | 50KB | `backend/server.js` |
| Docs | 500KB | `*.md` files |
| Components | 10MB | `components/` |

---

## 🚀 Getting Started (5 minutes)

### Step 1: Run App Locally
```bash
npm run dev
# Visit: http://localhost:5173
```

### Step 2: Change a Color
```javascript
// Edit: tailwind.config.js line 10
primary: { 500: '#FF0000' }  // Change to red
```

### Step 3: See It Live
Refresh browser → Color changed instantly! ✨

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| App shows red | Run `npm install` |
| Port 5173 in use | Run on different: `PORT=3000 npm run dev` |
| Can't see changes | Refresh browser (Ctrl+Shift+R) |
| Backend not starting | Check `backend/README.md` |
| Styling not working | Check `styles/globals.css` |

---

## 📚 Reading Order

1. **First**: This file (you are here!)
2. **Then**: `PROJECT_STRUCTURE.md` (understand layout)
3. **Design**: `COLOR_PALETTE_UPDATED.md` (colors)
4. **Then**: `TYPOGRAPHY_UPDATED.md` (fonts)
5. **Deploy**: `DEPLOYMENT_GUIDE.md` (sharing app)
6. **Advanced**: `DEVOPS_GUIDE.md` (full pipeline)

---

## ⚡ TL;DR (Ultra Quick)

- **View app**: `npm run dev` → http://localhost:5173
- **Change colors**: Edit `tailwind.config.js`
- **Change styles**: Edit `styles/globals.css`
- **Deploy**: Follow `DEPLOYMENT_GUIDE.md`
- **Backend**: See `backend/README.md`
- **Full guide**: Read `PROJECT_STRUCTURE.md`

---

## 🎓 Next Steps

✅ Run the app: `npm run dev`  
✅ Change a color in `tailwind.config.js`  
✅ See it update live in browser  
✅ Read `DEPLOYMENT_GUIDE.md` to share with others  
✅ Explore `DEVOPS_GUIDE.md` for advanced setup  

---

**Questions?** Check the specific `.md` file for that topic!

Happy coding! 🚀
