const nameComponent = "wiMachineLearningNavigator"
const template = require("./template.html")
require("./style.less")


angular.module("wiMachineLearning")
  .component(nameComponent, {
    template: template,
    controller: wiMachineLearningNavigatorController,
    controllerAs: "self",
    bindings: {
      wzName: "@"
    }
  });

function wiMachineLearningNavigatorController(WizardHandler) {
  let self = this

  this.$onInit = function() {
    self.wizard = WizardHandler.wizard(self.wzName)
  }

  this.onPreviousStep = function() {
    try {
      self.wizard.previous()
    }
    catch (err) {
    }
  }

  this.onNextStep = function() {
    try {
      self.wizard.next()
    }
    catch (err){
    }
  }
}
