const template = require("./boolean.html")

angular.module("wiMachineLearning")
  .component("wiBooleanType", {
    template: template,
    controller: function() {},
    controllerAs: "self",
    bindings: {
      data: "="
    }
  })
