const nameModule = "wiWizardNavigator"
const nameComponent = "wiWizardNavigator"
const style = require("./style.less")
const template = require("./template.html")
module.exports.name = nameModule
module.exports.nameComponent = nameComponent


angular.module(nameModule,[
  "mgo-angular-wizard"
])
.component(nameComponent, {
    template: template,
    controller: WiWizardNavigatorController,
    controllerAs: "self",
    bindings: {
      wzName: "@"
    }
});

function WiWizardNavigatorController(WizardHandler) {
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
