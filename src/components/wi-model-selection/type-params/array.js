const template = require("./array.html")

angular.module("wiMachineLearning")
  .component("wiArrayType", {
    template: template,
    controller: wiArrayTypeController,
    controllerAs: "self",
    bindings: {
      data: "="
    }
  })

function wiArrayTypeController() {
  let self = this

  this.$onInit = function() {

  }

  this.addItem = function() {
    self.data.value.push(10)
  }

  this.remove = function(index) {
    self.data.value.splice(index, 1)
  }
}
