const nameComponent = "wiCurveNode"
const template = require("./template.html")
require("./style.less");

angular.module("wiMachineLearning")
  .component(nameComponent, {
    template: template,
    controller: wiCurveNodeController,
    controllerAs: "self",
    bindings: {
      data: "<",
      onDelete: "<"
    }
  })


function wiCurveNodeController() {
  let self = this

  this.$onInit = function() {
  }
}
