(function () {
  "use strict";
  angular.module("MenuApp").component("categories", {
    templateUrl: "js_source/menu/templates/categories.template.html",
    bindings: {
      list: "<",
    },
  });
})();
