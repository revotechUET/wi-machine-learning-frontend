const nameModule = "wiMachineLearning"
const nameComponent = "wiMachineLearning"
const style = require("./style.less")
const template = require("./template.html")
module.exports.name = nameModule
module.exports.nameComponent = nameComponent

const wiDataSelection = require("../wi-data-selection")
const wiWizardNavigator = require("../wi-wizard-navigator")

angular.module(nameModule,[ 
  "wiLogin", "ngDialog", "mgo-angular-wizard", "wiDataSelection", "wiWizardNavigator"
  ]
)
.component(nameComponent, {
    template: template,
    controller: wiMachineLearningController,
    controllerAs: "self",
    bindings: {
    }
});

function wiMachineLearningController($scope, $http, ngDialog, wiToken,
  WizardHandler
) {
  this.$onInit = function() {
  }

  this.onFinish = function() {
    console.log("Finish!!!")
  }

  this.onCancel = function() {
    console.log("Cancel")
  }
}
