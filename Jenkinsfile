pipeline {
  agent any
  
  options {
    timestamps()
    timeout(time: 1, unit: 'HOURS')
    disableConcurrentBuilds()
  }
  
  environment {
    GCP_PROJECT_ID = 'college-event-system-b712f'
    GCP_REGION = 'us-central1'
    DOCKER_REGISTRY = "gcr.io/${GCP_PROJECT_ID}"
    IMAGE_NAME = "college-event-backend"
    IMAGE_TAG = "${BUILD_NUMBER}"
    CLUSTER_NAME = 'college-event-gke'
    NAMESPACE = 'college-event'
  }
  
  stages {
    stage('Checkout') {
      steps {
        checkout scm
        script {
          env.GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim().take(7)
          env.GIT_BRANCH = sh(returnStdout: true, script: 'git rev-parse --abbrev-ref HEAD').trim()
        }
      }
    }
    
    stage('Build & Test Backend') {
      steps {
        dir('backend') {
          sh '''
            echo "Installing dependencies..."
            npm ci
            
            echo "Running tests..."
            npm test || true
            
            echo "Linting code..."
            npm run lint || true
          '''
        }
      }
    }
    
    stage('Security Scan') {
      steps {
        dir('backend') {
          sh '''
            echo "Running npm audit..."
            npm audit --audit-level=moderate || true
          '''
        }
      }
    }
    
    stage('Build Docker Image') {
      steps {
        dir('backend') {
          sh '''
            echo "Authenticating with GCP..."
            gcloud auth configure-docker
            
            echo "Building Docker image..."
            docker build -t ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG} .
            docker tag ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG} ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest
            
            echo "Scanning image for vulnerabilities..."
            trivy image ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG} || true
          '''
        }
      }
    }
    
    stage('Push to Registry') {
      steps {
        sh '''
          echo "Pushing image to GCR..."
          docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}
          docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest
        '''
      }
    }
    
    stage('Terraform Plan') {
      steps {
        dir('terraform') {
          sh '''
            echo "Initializing Terraform..."
            terraform init -upgrade
            
            echo "Validating Terraform..."
            terraform validate
            
            echo "Planning Terraform..."
            terraform plan -var="backend_image=${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}" -out=tfplan
          '''
        }
      }
    }
    
    stage('Terraform Apply') {
      when {
        branch 'main'
      }
      steps {
        dir('terraform') {
          sh '''
            echo "Applying Terraform..."
            terraform apply -auto-approve tfplan
          '''
        }
      }
    }
    
    stage('Deploy to Kubernetes') {
      steps {
        sh '''
          echo "Configuring kubectl..."
          gcloud container clusters get-credentials ${CLUSTER_NAME} --region ${GCP_REGION} --project ${GCP_PROJECT_ID}
          
          echo "Creating namespace..."
          kubectl create namespace ${NAMESPACE} --dry-run=client -o yaml | kubectl apply -f -
          
          echo "Deploying Kubernetes manifests..."
          kubectl apply -f k8s/namespace.yaml
          kubectl apply -f k8s/configmap.yaml
          kubectl apply -f k8s/secret.yaml
          kubectl apply -f k8s/rbac.yaml
          kubectl apply -f k8s/deployment.yaml
          kubectl apply -f k8s/service.yaml
          kubectl apply -f k8s/ingress.yaml
          
          echo "Waiting for deployment..."
          kubectl rollout status deployment/backend -n ${NAMESPACE} --timeout=5m
        '''
      }
    }
    
    stage('Smoke Tests') {
      steps {
        sh '''
          echo "Running smoke tests..."
          SERVICE_IP=$(kubectl get service backend-service -n ${NAMESPACE} -o jsonpath='{.status.loadBalancer.ingress[0].ip}' || echo 'pending')
          
          if [ "$SERVICE_IP" != "pending" ]; then
            curl -f http://${SERVICE_IP}/health || exit 1
          else
            echo "LoadBalancer IP not yet assigned"
          fi
        '''
      }
    }
    
    stage('Post-Deploy Validation') {
      steps {
        sh '''
          echo "Checking pod status..."
          kubectl get pods -n ${NAMESPACE}
          
          echo "Checking deployment status..."
          kubectl describe deployment backend -n ${NAMESPACE}
          
          echo "Checking logs..."
          kubectl logs -n ${NAMESPACE} -l app=backend --tail=50
        '''
      }
    }
  }
  
  post {
    success {
      echo '✅ Pipeline succeeded!'
      sh '''
        echo "Deployment successful!"
        echo "Build: ${BUILD_NUMBER}"
        echo "Commit: ${GIT_COMMIT}"
        echo "Branch: ${GIT_BRANCH}"
        echo "Image: ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
      '''
    }
    
    failure {
      echo '❌ Pipeline failed!'
      sh '''
        echo "Checking logs for errors..."
        kubectl logs -n ${NAMESPACE} -l app=backend --tail=100 || true
      '''
    }
    
    always {
      cleanWs()
    }
  }
}
