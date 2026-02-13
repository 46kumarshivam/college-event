# Service Account for Workload Identity
resource "google_service_account" "backend" {
  account_id   = "college-event-backend"
  display_name = "College Event Backend Service Account"
}

# Firestore permissions
resource "google_project_iam_member" "backend_firestore" {
  project = var.project_id
  role    = "roles/datastore.user"
  member  = "serviceAccount:${google_service_account.backend.email}"
}

# Workload Identity Binding
resource "google_service_account_iam_member" "workload_identity" {
  service_account_id = google_service_account.backend.name
  role               = "roles/iam.workloadIdentityUser"
  member             = "serviceAccount:${var.project_id}.svc.id.goog[college-event/backend-sa]"
}
