# 📁 Project Structure Guide

A complete walkthrough of where everything is organized.

---

## 🏢 Main Folder Structure

```
college-event/
│
├── 📱 Frontend (React App)
│   ├── App.tsx                 # Main React component
│   ├── index.html              # HTML entry point
│   ├── components/             # React components
│   ├── styles/                 # CSS and styling
│   ├── types/                  # TypeScript types
│   ├── data/                   # Mock data
│   ├── utils/                  # Utility functions
│   └── services/               # API services
│
├── 🔧 Backend (Node.js API)
│   └── backend/                # Express server
│       ├── server.js           # Main API file
│       ├── package.json        # Dependencies
│       ├── Dockerfile          # Docker config
│       ├── docker-compose.yml  # Docker Compose
│       └── README.md           # Backend guide
│
├── ☸️ Kubernetes
│   └── k8s/                    # K8s manifests
│       ├── namespace.yaml      # Namespace
│       ├── deployment.yaml     # Pod deployment
│       ├── service.yaml        # Service & HPA
│       ├── configmap.yaml      # Config
│       ├── secret.yaml         # Secrets
│       ├── rbac.yaml           # Security roles
│       └── ingress.yaml        # Routing
│
├── 🏗️ Infrastructure (Terraform)
│   └── terraform/              # IaC configs
│       ├── main.tf             # Providers
│       ├── gke.tf              # GKE cluster
│       ├── iam.tf              # Security
│       ├── storage.tf          # Storage
│       ├── variables.tf        # Variables
│       └── outputs.tf          # Outputs
│
├── 🔄 CI/CD Pipeline
│   └── Jenkinsfile             # Jenkins pipeline
│
├── 🎨 Design System
│   ├── COLOR_PALETTE_UPDATED.md      # Colors
│   ├── TYPOGRAPHY_UPDATED.md         # Typography
│   ├── DESIGN_SYSTEM.md              # Overall design
│   └── UI_SPECIFICATION.md           # UI specs
│
├── 📚 Documentation
│   ├── DEVOPS_GUIDE.md               # DevOps guide
│   ├── DEPLOYMENT_GUIDE.md           # Deployment
│   ├── FIREBASE_SETUP.md             # Firebase
│   ├── BACKEND_INTEGRATION.md        # Backend integration
│   ├── QUICK_REFERENCE.md            # Quick ref
│   └── CSS_CLASSES_REFERENCE.md      # CSS classes
│
├── ⚙️ Configuration Files
│   ├── package.json            # NPM dependencies
│   ├── vite.config.ts          # Vite build config
│   ├── tailwind.config.js      # Tailwind config
│   ├── tsconfig.json           # TypeScript config
│   └── postcss.config.js       # PostCSS config
│
└── 📦 Build & Distribution
    ├── dist/                   # Production build
    └── node_modules/           # Dependencies (auto)
```

---

## 📁 Frontend Structure (components/)

```
components/
├── figma/                      # Figma components
│   └── ImageWithFallback.tsx   # Image with fallback
│
└── ui/                         # UI Components (shadcn)
    ├── button.tsx              # Button
    ├── card.tsx                # Card
    ├── input.tsx               # Input field
    ├── form.tsx                # Form
    ├── dialog.tsx              # Modal
    ├── table.tsx               # Table
    ├── badge.tsx               # Badge/tag
    ├── avatar.tsx              # Avatar
    ├── dropdown-menu.tsx       # Dropdown
    └── ... (20+ more)          # Other components
```

---

## 🎨 Styles Structure (styles/)

```
styles/
└── globals.css                 # All global styles
    ├── @layer base             # Typography (h1-h5, p, etc)
    ├── @layer components       # Component styles (.btn-, .card-, etc)
    └── @layer utilities        # Utility classes
```

---

## 🔧 Backend Structure (backend/)

```
backend/
├── server.js                   # Main Express app
│   ├── Health check endpoint
│   ├── Events API (CRUD)
│   └── Registrations API (CRUD)
│
├── package.json                # Express, Firebase Admin, CORS
├── Dockerfile                  # Production Docker image
├── docker-compose.yml          # Local development setup
├── .dockerignore               # Docker build excludes
├── firebase-service-account.json  # (add manually)
├── app.yaml                    # App Engine config
└── README.md                   # Backend guide
```

---

## ☸️ Kubernetes Structure (k8s/)

```
k8s/
├── namespace.yaml              # college-event namespace
├── configmap.yaml              # Environment variables
├── secret.yaml                 # Firebase credentials
├── rbac.yaml                   # Service account & roles
├── deployment.yaml             # 3 replicas, health checks
├── service.yaml                # ClusterIP + HPA (3-10 pods)
└── ingress.yaml                # HTTPS routing
```

---

## 🏗️ Terraform Structure (terraform/)

```
terraform/
├── main.tf                     # Provider setup
├── gke.tf                      # GKE cluster & node pool
├── iam.tf                      # Service accounts & permissions
├── storage.tf                  # GCS bucket for state
├── variables.tf                # All configurable variables
├── outputs.tf                  # Cluster info outputs
└── terraform.tfvars (optional) # Override variables
```

---

## 📝 Key Files Explained

### Frontend Entry Points
| File | Purpose |
|------|---------|
| `index.html` | HTML page (loads React app) |
| `App.tsx` | Root React component |
| `main.tsx` (if exists) | React DOM render |

### Configuration Files
| File | Purpose |
|------|---------|
| `package.json` | NPM dependencies & scripts |
| `vite.config.ts` | Build tool config |
| `tailwind.config.js` | Design tokens & colors |
| `tsconfig.json` | TypeScript settings |
| `postcss.config.js` | CSS processing |

### Documentation Files
| File | Purpose |
|------|---------|
| `DEVOPS_GUIDE.md` | Full DevOps pipeline guide |
| `DEPLOYMENT_GUIDE.md` | How to deploy app |
| `FIREBASE_SETUP.md` | Firebase database setup |
| `BACKEND_INTEGRATION.md` | Connect frontend to backend |
| `COLOR_PALETTE_UPDATED.md` | All colors & usage |
| `TYPOGRAPHY_UPDATED.md` | Font sizes & styles |
| `DESIGN_SYSTEM.md` | Overall design rules |

---

## 🚀 Development Workflow

### Where to make changes:

1. **UI Changes?**
   → Edit `components/` folder

2. **Styling Changes?**
   → Edit `styles/globals.css`

3. **Colors/Fonts?**
   → Edit `tailwind.config.js`

4. **Add new page?**
   → Create new component in `components/`

5. **Backend Changes?**
   → Edit `backend/server.js`

6. **Infrastructure Changes?**
   → Edit `terraform/*.tf` files

7. **Deployment Changes?**
   → Edit `k8s/*.yaml` files

---

## 📊 File Size Summary

```
Frontend (src/ + components/):        ~5-10 MB (after build: 300KB gzip)
Backend (backend/):                   ~500KB
Kubernetes (k8s/):                    ~50KB (manifests)
Terraform (terraform/):               ~30KB (IaC)
Jenkins (Jenkinsfile):                ~10KB (pipeline)
Documentation:                        ~500KB (all .md files)
node_modules:                         ~300MB (dependencies)
```

---

## 🎯 Common Tasks & Where to Look

### I want to...

| Task | Go to |
|------|-------|
| Change colors | `tailwind.config.js` |
| Modify button style | `components/ui/button.tsx` + `styles/globals.css` |
| Add new event field | `types/index.ts` (Event interface) |
| Change API endpoint | `backend/server.js` |
| Deploy to Kubernetes | `k8s/*.yaml` files |
| Setup infrastructure | `terraform/*.tf` files |
| Fix CI/CD pipeline | `Jenkinsfile` |
| Understand design system | `COLOR_PALETTE_UPDATED.md` + `TYPOGRAPHY_UPDATED.md` |

---

## 🔒 Security Files (Add manually)

These files should be added but are NOT in git (for security):

```
backend/firebase-service-account.json  ← Download from GCP
k8s/secret.yaml (values)               ← Firebase credentials
.env.local                             ← API keys (if using)
```

---

## 📦 Build Artifacts

### After `npm run build`:

```
dist/
├── index.html          # Main HTML file
├── assets/             # Compiled files
│   ├── index-*.css     # Minified CSS (83KB gzipped)
│   └── index-*.js      # Minified JS (328KB gzipped)
└── vite.svg            # Favicon
```

These files go to Vercel/production.

---

## 🗂️ Organized by Purpose

### Frontend Related
- `App.tsx`, `components/`, `styles/`, `types/`, `utils/`, `services/`, `data/`
- `tailwind.config.js`, `vite.config.ts`, `index.html`

### Backend Related
- `backend/` folder (separate Node.js app)
- `Jenkinsfile`, `Dockerfile` (in backend)

### Infrastructure Related
- `k8s/` (Kubernetes manifests)
- `terraform/` (Infrastructure as Code)
- `Jenkinsfile` (CI/CD pipeline)

### Documentation
- `*.md` files (guides and references)

### Configuration
- `package.json`, `tsconfig.json`, `postcss.config.js`

---

## 🎓 Learning Path

1. **Start here**: `DESIGN_SYSTEM.md` (understand design)
2. **Then**: `App.tsx` (see main component)
3. **Explore**: `components/` (see UI components)
4. **Styling**: `styles/globals.css` (see styles)
5. **Backend**: `BACKEND_INTEGRATION.md` (learn API)
6. **Deployment**: `DEVOPS_GUIDE.md` (full pipeline)

---

## 📍 Quick Navigation

**Need to...**

- Deploy? → `DEVOPS_GUIDE.md` + `k8s/` + `terraform/`
- Fix CSS? → `styles/globals.css` + `tailwind.config.js`
- Add feature? → `components/` + `backend/server.js`
- Understand design? → `COLOR_PALETTE_UPDATED.md` + `TYPOGRAPHY_UPDATED.md`
- Change colors? → `tailwind.config.js` line 10-50
- Deploy to internet? → `DEPLOYMENT_GUIDE.md`
- Setup Firebase? → `FIREBASE_SETUP.md`
- Connect API? → `BACKEND_INTEGRATION.md`

---

## 🎯 Key Takeaways

✅ **Frontend** = React components in `components/` folder  
✅ **Backend** = Node.js API in `backend/` folder  
✅ **Styling** = All CSS in `styles/globals.css`  
✅ **Design** = Colors/fonts in `tailwind.config.js`  
✅ **Infrastructure** = Terraform scripts in `terraform/` folder  
✅ **Deployment** = Kubernetes manifests in `k8s/` folder  
✅ **Pipeline** = Jenkins in `Jenkinsfile`  
✅ **Guides** = Documentation in `.md` files  

---

## 📞 File Purpose Summary

| Folder/File | What it is | Why it matters |
|-------------|-----------|--------|
| `components/` | React UI pieces | This is your app's interface |
| `styles/` | CSS styling | How your app looks |
| `backend/` | Server & API | Where data is processed |
| `k8s/` | Kubernetes config | How app runs on cloud |
| `terraform/` | Infrastructure | Setup cloud resources |
| `Jenkinsfile` | Automation | Builds & deploys automatically |
| `.md` files | Guides | How to use everything |

**That's it!** Everything is organized logically. 🎉
