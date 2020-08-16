(function () {
  "use strict";
  angular.module("MenuApp").component("items", {
    templateUrl: "js_source/menu/templates/items.template.html",
    bindings: {
      list: "<",
    },
  });
})();
