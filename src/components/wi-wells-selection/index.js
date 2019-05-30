const nameComponent = "wiWellsSelection"
const template = require("./template.html")
require("./style.less")

angular.module("wiMachineLearning")
  .component(nameComponent, {
    template: template,
    controller: wiWellsSelectionController,
    controllerAs: "self",
    bindings: {
      idProject: "<"
    }
  });

function wiWellsSelectionController(wiApi, $timeout) {
  let self = this
  this.filterTreeRoot= []
  this.wellTreeRoot = []

  this.$onInit = async function() {
    //self.filterTreeRoot = await wiApi.getWellsPromise(self.idProject)
    self.filterTreeRoot = [{
      name: "Well 1"
    }, {
      name: "Well 2"
    }, {
      name: "Well 3"
    }]
  }

  this.getFilterChildren = function(node) {
    return []
  }

  this.getFilterIcon = function(node) {
    return "well-16x16"
  }

  this.getFilterLabel = function(node) {
    return node.name
  }

  this.filterRunMatch = function(node, cond) {
    return true
  }

  this.getWellChildren = function(node) {
    return []
  }

  this.getWellIcon = function(node) {
    return "well-16x16"
  }

  this.getWellLabel = function(node) {
    return node.name
  }

  this.wellRunMatch = function(node, cond) {
    return true
  }

  this.onDrop = function(event, helper, data) {
    $timeout(() => {
      data.forEach(e => {
        self.wellTreeRoot.push(angular.copy(e))
      })
    })
  }
}
