# GKE Cluster
resource "google_container_cluster" "gke_cluster" {
  name     = var.cluster_name
  location = var.region

  # Node pool configuration
  initial_node_count       = var.node_count
  remove_default_node_pool = true

  # Workload Identity
  workload_identity_config {
    workload_pool = "${var.project_id}.svc.id.goog"
  }

  # Network policy
  network_policy {
    enabled = true
  }

  # Logging and monitoring
  logging_service    = "logging.googleapis.com/kubernetes"
  monitoring_service = "monitoring.googleapis.com/kubernetes"

  # IP allocation
  ip_allocation_policy {
    cluster_secondary_range_name  = "pods"
    services_secondary_range_name = "services"
  }

  labels = {
    environment = var.environment
    managed_by  = "terraform"
  }

  depends_on = [
    google_compute_network.network
  ]
}

# Node Pool
resource "google_container_node_pool" "primary_nodes" {
  name    = "${var.cluster_name}-node-pool"
  cluster = google_container_cluster.gke_cluster.id

  # Auto-scaling configuration
  autoscaling {
    min_node_count = var.min_node_count
    max_node_count = var.max_node_count
  }

  # Node configuration
  node_config {
    preemptible  = true
    machine_type = var.machine_type

    # Workload Identity
    workload_metadata_config {
      mode = "GKE_METADATA"
    }

    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]

    labels = {
      pool        = "primary"
      environment = var.environment
    }

    tags = ["gke-node", "college-event"]
  }

  management {
    auto_repair  = true
    auto_upgrade = true
  }
}

# VPC Network
resource "google_compute_network" "network" {
  name = "college-event-network"

  auto_create_subnetworks = false
}

# Subnet
resource "google_compute_subnetwork" "subnet" {
  name          = "college-event-subnet"
  ip_cidr_range = "10.0.0.0/20"
  region        = var.region
  network       = google_compute_network.network.id

  secondary_ip_range {
    range_name    = "pods"
    ip_cidr_range = "10.16.0.0/12"
  }

  secondary_ip_range {
    range_name    = "services"
    ip_cidr_range = "10.32.0.0/12"
  }
}
