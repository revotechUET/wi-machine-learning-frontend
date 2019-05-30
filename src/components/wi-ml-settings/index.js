const nameComponent = "wiMlSettings"
const template = require("./template.html")
require("./style.less");

angular.module("wiMachineLearning")
  .component(nameComponent, {
    template: template,
    controller: wiMlSettingsController,
    controllerAs: "self",
    bindings: {
    }
  })


function wiMlSettingsController() {
  let self = this
  this.verificationPlotName = "Thanh"
  this.predictionPlotName = "Demo"

  this.$onInit = function() {
  }

  this.setVPlotName = function(notUse, newVal) {
    self.verificationPlotName = newVal;  
  }

  this.setPPlotName = function(notUse, newVal) {
    self.predictionPlotName = newVal;
  }

}
