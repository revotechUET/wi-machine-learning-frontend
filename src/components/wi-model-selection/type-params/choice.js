const template = require("./choice.html")

angular.module("wiMachineLearning")
  .component("wiChoiceType", {
    template: template,
    controller: function() {},
    controllerAs: "self",
    bindings: {
      data: "="
    }
  })
