"use strict";
{
  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getAllItems().then((response) => {
      vm.items = response.data;
    });
    vm.addItem = (newItem) => {
      CartService.addItem(newItem).then((response) => {
        vm.items = response.data;
      });
      vm.newItem = {};
    };
    vm.removeItem = (id) => {
      CartService.removeItem(id).then((response) => {
        vm.items = response.data;
      });
    };
    vm.updateItem = (item) => {
      CartService.updateItem(item).then((response) => {
        vm.items = response.data;
      });
    };
  }]
};

angular
  .module("SCApp")
  .component("cart", cart);