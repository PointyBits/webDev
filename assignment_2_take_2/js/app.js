(function () {
  "use strict";

  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .controller("ListAddController", ListAddController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  //_________________________________________________________________________
  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.items = ShoppingListCheckOffService.getBoughtItems();

    bought.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.alreadyRemovedItem(itemIndex);
    };
  }

  ListAddController.$inject = ["ShoppingListCheckOffService"];
  function ListAddController(ShoppingListCheckOffService) {
    var itemAdder = this;

    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";

    itemAdder.items = ShoppingListCheckOffService.getToBuyItems();

    itemAdder.move = function (itemIndex) {
      ShoppingListCheckOffService.move(itemIndex);
    };

    itemAdder.addItem = function () {
      ShoppingListCheckOffService.addItem(
        itemAdder.itemName,
        itemAdder.itemQuantity
      );
    };

    itemAdder.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    };
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // service.toBuyItems = [];
    // service.boughtItems = [];
    var toBuyItems = [];
    var boughtItems = [];

    var item1= {
        name: "apples",
        quantity: 5,
    };
    var item2= {
        name: "cokes",
        quantity: 6,
    };
    var item3= {
        name: "chips",
        quantity: 7,
    };
    var item4= {
        name: "cookies",
        quantity: 8,
    };
    var item5= {
        name: "onions",
        quantity: 9,
    };

    toBuyItems.push(item1);
    toBuyItems.push(item2);
    toBuyItems.push(item3);
    toBuyItems.push(item4);
    toBuyItems.push(item5);

    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity,
      };
      toBuyItems.push(item);
    };

    service.removeItem = function (itemIndex) {
      toBuyItems.splice(itemIndex, 1);
    };

    service.alreadyRemovedItem = function (itemIndex) {
      boughtItems.splice(itemIndex, 1);
    };

    service.move = function (itemIndex) {
      boughtItems.push(toBuyItems[itemIndex]);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };
  }


})();
