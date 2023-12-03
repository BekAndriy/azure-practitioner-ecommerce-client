## Create a Resource Group for Storage
resource "azurerm_resource_group" "front_end_rg" {
  location = var.deploy_location
  name     = var.rg_stor
}


resource "azurerm_storage_account" "front_end_storage_account" {
  name     = "azurecloudfrontfe0016"
  location = azurerm_resource_group.front_end_rg.location

  account_replication_type = "LRS"
  account_tier             = "Standard"
  account_kind             = "StorageV2"
  resource_group_name      = azurerm_resource_group.front_end_rg.name

  static_website {
    index_document     = "index.html"
    error_404_document = "index.html"
  }
}
