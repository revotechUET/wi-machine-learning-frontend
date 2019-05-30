const nameComponent = "wiCurvesSelection"
const template = require("./template.html")
require("./style.less");

angular.module("wiMachineLearning")
  .component(nameComponent, {
    template: template,
    controller: wiCurvesSelectionController,
    controllerAs: "self",
    bindings: {
    }
  })


function wiCurvesSelectionController(wiApi, $timeout) {
  let self = this
  let hashCurves = {}
  let hashFamilies = {}
  let hashMainFamilies = {}
  this.filterTreeRoot = null
  this.inputs = []
  this.target = null
  this.mode = "curve"

  this.$onInit = async function() {
    const idProject = 1
    const wells = await wiApi.getWellsPromise(idProject)
    for (let w of wells) {
      const wi = await wiApi.getWellPromise(w.idWell)
      for (let dataset of wi.datasets) {
        for (let curve of dataset.curves) {
          hashCurves[curve.name] = 1
          let family = wiApi.getAllFamilies().find(f => f.idFamily === curve.idFamily)
          if (family) {
            hashFamilies[family.name] = 1
            hashMainFamilies[family.familyGroup] = 1
          }
          else {
            console.log("Why?")
          }
        }
      }
      self.filterTreeRoot = self.getFilterTreeRoot()
    }
  }

  this.setMode = function(mode) {
    self.mode = mode
    self.filterTreeRoot = self.getFilterTreeRoot()
  }

  this.getFilterTreeRoot = function() {
    switch(self.mode) {
      case "curve":
        return Object.keys(hashCurves)
      case "family":
        return Object.keys(hashFamilies)
      case "familyGroup":
        return Object.keys(hashMainFamilies)
    }
  }                                                

  this.getFilterChildren = function(node) {
    return []
  }

  this.getFilterLabel = function(node) {
    return node
  }

  this.getFilterIcon = function(node) {
    switch(self.mode) {
      case "curve":
        return "curve-16x16"
      case "family":
        return "family-16x16"
      case "familyGroup":
        return "family-group-16x16"
    }
  }

  this.filterRunMatch = function(node, cond) {
    return node.includes(cond)
  }

  this.onInputDrop = function(event, helper, nodes) {
    $timeout(() => {
      nodes.forEach((n) => {
        self.inputs.push({name: n, transform: "linear"});
      })
    });
  }

  this.onTargetDrop = function(event, helper, nodes) {
    $timeout(() => {
      nodes.forEach((n) => {
        self.target = {name: n, transform: "linear"};
      })
    });
  }

  this.deleteInputNode = function(node) {
    self.inputs = self.inputs.filter((e) => {
      return e.name !== node.name
    })
  }
}
