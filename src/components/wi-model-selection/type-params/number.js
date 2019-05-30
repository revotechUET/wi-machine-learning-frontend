const template = require("./number.html")

angular.module("wiMachineLearning")
  .component("wiNumberType", {
    template: template,
    controller: function() {},
    controllerAs: "self",
    bindings: {
      data: "="
    }
  })
