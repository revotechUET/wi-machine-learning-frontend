const nameComponent = "wiMachineLearning"
const template = require("./template.html")
require("./style.less")

angular.module("wiMachineLearning")
  .component(nameComponent, {
    template: template,
    controller: wiMachineLearningController,
    controllerAs: "self",
    bindings: {
      idProject: "<"
    }
  });

function wiMachineLearningController() {
  let self = this

  this.$onInit = function() {
    console.log(self.idProject)
  }

  this.onFinish = function() {
    console.log("Finish!!!")
    console.log("Preparing payload for send to ml server")
  }

  this.onCancel = function() {
    this.$onInit()
  }
}
