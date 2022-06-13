provider "google" {
credentials = var.credential
region      = var.default_location
project     = var.project_id
}