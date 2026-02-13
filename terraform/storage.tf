# Container Registry for Docker images
resource "google_container_registry" "registry" {
  project  = var.project_id
  location = "US"
}

# Storage Bucket for Terraform state
resource "google_storage_bucket" "terraform_state" {
  name          = "${var.project_id}-terraform-state"
  location      = var.region
  force_destroy = false

  versioning {
    enabled = true
  }

  uniform_bucket_level_access = true

  labels = {
    environment = var.environment
    managed_by  = "terraform"
  }
}
