# ♊ GEMINI Project Guide

This document provides instructions and context for using the Gemini large language model to work on this project.

---

## 🎯 Project Overview

This is a **complete, production-ready** College Event Management application with:

- Modern React UI (Beautiful design)
- Real-time database (Firebase)
- Backend API (Node.js Express)
- Cloud deployment (Google Cloud)
- Containerization (Docker)
- Orchestration (Kubernetes)
- CI/CD pipeline (Jenkins)
- Infrastructure as Code (Terraform)
- Complete documentation

---

## 🔧 Key Technologies

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript + Tailwind CSS |
| UI Components | shadcn/ui (Radix UI based) |
| Backend | Node.js + Express |
| Database | Firebase Firestore |
| Containerization | Docker |
| Orchestration | Kubernetes |
| Infrastructure | Terraform |
| CI/CD | Jenkins |
| Cloud Provider | Google Cloud Platform (GCP) |
| Hosting | Vercel (frontend) |

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

### 3. Open in Browser
The application will be available at `http://localhost:5173`.

---

## 🧪 Testing

There are currently no tests in this project. It is highly recommended to add a testing framework (such as Jest and React Testing Library) and write tests to ensure code quality and prevent regressions.

---

## 📜 Conventions

- **Code Style:** Follow the existing code style.
- **Commit Messages:** Use conventional commit messages (e.g., `feat: add new feature`, `fix: fix bug`).
- **Branching:** Create a new branch for each new feature or bug fix.

---

## 📁 Important Files

| File | Description |
|---|---|
| `App.tsx` | Main application component. |
| `components/` | Reusable React components. |
| `styles/globals.css` | Global CSS styles. |
| `tailwind.config.js` | Tailwind CSS configuration. |
| `backend/server.js` | Backend Express server. |
| `k8s/*.yaml` | Kubernetes configuration files. |
| `terraform/*.tf` | Terraform infrastructure as code. |
| `Jenkinsfile` | Jenkins CI/CD pipeline configuration. |

---

## 📝 Notes

- When making changes, please update the relevant documentation.
- Before submitting a pull request, make sure all tests are passing.
- If you have any questions, please refer to the project documentation or ask for clarification.
