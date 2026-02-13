output "kubernetes_cluster_name" {
  value       = google_container_cluster.gke_cluster.name
  description = "GKE Cluster Name"
}

output "kubernetes_cluster_host" {
  value       = google_container_cluster.gke_cluster.endpoint
  description = "GKE Cluster Host"
  sensitive   = true
}

output "region" {
  value       = var.region
  description = "GCP region"
}

output "service_account_email" {
  value       = google_service_account.backend.email
  description = "Backend Service Account Email"
}

output "container_registry_url" {
  value       = "gcr.io/${var.project_id}"
  description = "Container Registry URL"
}

output "terraform_state_bucket" {
  value       = google_storage_bucket.terraform_state.name
  description = "Terraform State Storage Bucket"
}
