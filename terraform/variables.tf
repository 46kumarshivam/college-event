variable "project_id" {
  type        = string
  description = "GCP Project ID"
  default     = "college-event-system-b712f"
}

variable "region" {
  type        = string
  description = "GCP Region"
  default     = "us-central1"
}

variable "cluster_name" {
  type        = string
  description = "GKE Cluster Name"
  default     = "college-event-gke"
}

variable "environment" {
  type        = string
  description = "Environment name"
  default     = "dev"
}

variable "machine_type" {
  type        = string
  description = "Machine type for nodes"
  default     = "e2-medium"
}

variable "node_count" {
  type        = number
  description = "Initial node count"
  default     = 3
}

variable "min_node_count" {
  type        = number
  description = "Minimum node count"
  default     = 3
}

variable "max_node_count" {
  type        = number
  description = "Maximum node count"
  default     = 10
}

variable "backend_image" {
  type        = string
  description = "Docker image for backend"
  default     = "gcr.io/college-event-system-b712f/college-event-backend:latest"
}
