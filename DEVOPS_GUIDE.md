# 🚀 Complete DevOps Pipeline Guide

Full production-grade DevOps setup for College Event Management app.

## Architecture

```
GitHub Repository
    ↓ (Push/PR)
Jenkins Server
    ↓ (Trigger)
Build Stage
    ├─ Code checkout
    ├─ Tests
    ├─ Security scan
    └─ Build Docker image
    ↓
Push to GCR
    ↓
Terraform
    ├─ Plan infrastructure
    └─ Apply changes
    ↓
Deploy to Kubernetes (GKE)
    ├─ Apply configs
    ├─ Rolling update
    └─ Smoke tests
    ↓
Production Environment
```

---

## Prerequisites

### Required Tools
- Docker
- kubectl
- gcloud CLI
- Terraform
- Jenkins

### GCP Setup
- GCP Project: `college-event-system-b712f`
- Firestore enabled
- Container Registry enabled
- GKE API enabled

---

## 🔧 STEP 1: Local Docker Testing

### 1.1 Build Docker Image Locally

```bash
cd backend
docker build -t college-event-backend:local .
```

### 1.2 Test with Docker Compose

```bash
docker-compose up --build
```

Test: `curl http://localhost:8080/health`

### 1.3 Push to GCR

```bash
# Authenticate
gcloud auth configure-docker

# Build for GCR
docker build -t gcr.io/college-event-system-b712f/college-event-backend:v1 .

# Push
docker push gcr.io/college-event-system-b712f/college-event-backend:v1
```

---

## 🏗️ STEP 2: Setup Kubernetes Cluster (Terraform)

### 2.1 Initialize Terraform

```bash
cd terraform

# Initialize backend
terraform init \
  -backend-config="bucket=college-event-terraform-state" \
  -backend-config="prefix=dev"

# Validate
terraform validate

# Plan
terraform plan -out=tfplan
```

### 2.2 Create GKE Cluster

```bash
# Apply infrastructure
terraform apply tfplan

# Get cluster credentials
gcloud container clusters get-credentials \
  college-event-gke \
  --region us-central1 \
  --project college-event-system-b712f
```

### 2.3 Verify Cluster

```bash
# Check nodes
kubectl get nodes

# Check cluster info
kubectl cluster-info

# Get cluster endpoint
gcloud container clusters describe college-event-gke \
  --region us-central1 \
  --format="value(endpoint)"
```

---

## 📋 STEP 3: Deploy to Kubernetes

### 3.1 Create Secrets

```bash
# Update k8s/secret.yaml with your firebase-service-account.json content

kubectl apply -f k8s/secret.yaml
```

### 3.2 Deploy Manifests

```bash
# Create namespace
kubectl apply -f k8s/namespace.yaml

# Create config and secrets
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/secret.yaml

# Create RBAC
kubectl apply -f k8s/rbac.yaml

# Deploy application
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

# Setup ingress (optional)
kubectl apply -f k8s/ingress.yaml
```

### 3.3 Verify Deployment

```bash
# Check pods
kubectl get pods -n college-event

# Check deployment
kubectl get deployment -n college-event

# Check service
kubectl get service -n college-event

# View logs
kubectl logs -n college-event -l app=backend -f

# Check HPA
kubectl get hpa -n college-event
```

### 3.4 Access Application

```bash
# Get service IP
kubectl get service backend-service -n college-event

# Port forward (for testing)
kubectl port-forward -n college-event svc/backend-service 8080:80

# Test
curl http://localhost:8080/health
```

---

## 🔄 STEP 4: Setup Jenkins CI/CD

### 4.1 Install Jenkins

```bash
# Using Docker (for testing)
docker run -d \
  -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins-data:/var/jenkins_home \
  jenkins/jenkins:lts

# Access: http://localhost:8080
```

### 4.2 Configure Jenkins

1. **Install Plugins**
   - GitHub Integration
   - Google Kubernetes Engine
   - Docker Pipeline
   - Terraform

2. **Add Credentials**
   - GitHub SSH key
   - GCP Service Account
   - Docker Registry

3. **Create Pipeline Job**
   - New Item → Pipeline
   - Pipeline script from SCM (Git)
   - Repository URL: Your GitHub repo
   - Script path: `Jenkinsfile`

### 4.3 Configure Webhooks

```bash
# GitHub → Settings → Webhooks
# Payload URL: http://jenkins-server:8080/github-webhook/
# Content type: application/json
# Events: Push events
```

---

## 🚀 STEP 5: Full CI/CD Pipeline

### 5.1 Trigger Pipeline

```bash
# Option 1: Push to GitHub
git push origin main

# Option 2: Manual trigger in Jenkins
# Click "Build Now"
```

### 5.2 Monitor Pipeline

```bash
# Watch logs
kubectl logs -n college-event deployment/backend -f

# Watch pods
kubectl get pods -n college-event -w

# Check events
kubectl describe pod -n college-event <pod-name>
```

### 5.3 Rollback (if needed)

```bash
# See rollout history
kubectl rollout history deployment/backend -n college-event

# Rollback to previous version
kubectl rollout undo deployment/backend -n college-event

# Rollback to specific revision
kubectl rollout undo deployment/backend -n college-event --to-revision=2
```

---

## 📊 Monitoring & Logging

### GCP Monitoring

```bash
# View logs in GCP
gcloud logging read "resource.type=k8s_container AND namespace_name=college-event" \
  --limit 50 \
  --format=json \
  --project college-event-system-b712f
```

### Kubernetes Monitoring

```bash
# Pod metrics
kubectl top pods -n college-event

# Node metrics
kubectl top nodes

# Resource usage
kubectl describe node <node-name>
```

### View Application Logs

```bash
# Current logs
kubectl logs -n college-event deployment/backend

# Previous logs (crashed pod)
kubectl logs -n college-event deployment/backend --previous

# Follow logs
kubectl logs -n college-event deployment/backend -f

# Specific pod
kubectl logs -n college-event <pod-name>

# All pods with label
kubectl logs -n college-event -l app=backend --all-containers=true
```

---

## 🔐 Security Best Practices

### 1. Workload Identity
```bash
# Already configured in Terraform
# Pods authenticate to GCP without keys
```

### 2. Network Policies
```bash
# Restrict traffic between pods
kubectl apply -f k8s/network-policy.yaml
```

### 3. RBAC
```bash
# Pods have minimal permissions
# Defined in k8s/rbac.yaml
```

### 4. Secrets Management
```bash
# Use Google Secret Manager
gcloud secrets create firebase-key --data-file=firebase-service-account.json

# Reference in Kubernetes
kubectl create secret generic firebase-secret \
  --from-literal=key=$(gcloud secrets versions access latest --secret="firebase-key")
```

---

## 💰 Cost Optimization

### GKE Pricing
- Node cost: ~$20-30/month (3 e2-medium nodes)
- Storage: ~$5/month
- Load Balancer: ~$20/month
- **Total: ~$45-55/month**

### Optimize Costs

```bash
# Use preemptible nodes (already in terraform)
# Set resource limits (already configured)
# Use autoscaling (HPA configured)
# Clean up unused resources

# Check current costs
gcloud billing accounts list
```

---

## 🧪 Testing Pipeline Locally

### Test Jenkins Locally

```bash
# Install Jenkins locally
docker-compose -f docker-compose.jenkins.yml up

# Access: http://localhost:8080
```

### Test Kubernetes Locally

```bash
# Install Minikube
minikube start

# Deploy to Minikube
kubectl config use-context minikube
kubectl apply -f k8s/deployment.yaml
```

---

## 📚 Useful Commands Cheat Sheet

```bash
# Kubernetes
kubectl get pods -n college-event
kubectl describe pod <pod-name> -n college-event
kubectl logs <pod-name> -n college-event
kubectl exec -it <pod-name> -n college-event -- bash
kubectl scale deployment backend --replicas=5 -n college-event
kubectl rollout restart deployment/backend -n college-event

# Terraform
terraform plan -out=tfplan
terraform apply tfplan
terraform destroy
terraform state list
terraform state show google_container_cluster.gke_cluster

# Docker
docker build -t image:tag .
docker push gcr.io/project/image:tag
docker pull gcr.io/project/image:tag
docker run -it image:tag

# GCP
gcloud container clusters list
gcloud container clusters describe college-event-gke
gcloud compute instances list
gcloud logging read --limit=50
```

---

## 🚨 Troubleshooting

### Pods not starting
```bash
kubectl describe pod <pod-name> -n college-event
kubectl logs <pod-name> -n college-event
```

### Image pull errors
```bash
# Check image exists in GCR
gcloud container images list

# Check authentication
kubectl get secret -n college-event
```

### Terraform errors
```bash
# Refresh state
terraform refresh

# Import existing resource
terraform import <resource> <id>
```

### Jenkins not triggering
```bash
# Check webhook delivery
GitHub → Settings → Webhooks → Recent Deliveries

# Check Jenkins logs
docker logs jenkins-container
```

---

## 📈 Scale Up

### Increase cluster size

```bash
# Update terraform/variables.tf
max_node_count = 20

# Apply changes
terraform apply
```

### Increase replicas

```bash
# Update k8s/deployment.yaml
replicas: 10

# Apply
kubectl apply -f k8s/deployment.yaml
```

---

## ✅ Production Checklist

- [ ] Terraform state backed up in GCS
- [ ] RBAC configured with least privilege
- [ ] Secrets stored in Google Secret Manager
- [ ] Monitoring and alerts configured
- [ ] Backup and disaster recovery plan
- [ ] SSL/TLS certificates configured
- [ ] Network policies enforced
- [ ] Resource limits set
- [ ] HPA configured and tested
- [ ] Logging aggregated
- [ ] Regular security audits scheduled
- [ ] Documentation up to date

---

## 🎉 You're Done!

Your production-grade DevOps pipeline is ready!

**Next steps:**
1. Push code to GitHub
2. Jenkins triggers automatically
3. Docker image built and pushed
4. Infrastructure updated with Terraform
5. Application deployed to Kubernetes
6. Everything scales and monitors automatically

**Questions?** Check the logs with `kubectl logs` or `terraform apply` with `-debug` flag.
