output "location" {
  description = "The Azure region"
  value       = azurerm_resource_group.front_end_rg.location
}

output "storage_account" {
  description = "Storage account for Profiles"
  value       = azurerm_storage_account.front_end_storage_account.name
}

output "azurerm_static_website_url" {
  description = "Static website URL"
  value       = azurerm_storage_account.front_end_storage_account.primary_web_host
}
