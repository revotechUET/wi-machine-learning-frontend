const nameComponent= "wiModelSelection"
const template = require("./template.html")
require("./style.less")
const models = require("./models.js")

angular.module("wiMachineLearning")
  .component(nameComponent, {
    template: template,
    controller: wiModelSelectionController,
    controllerAs: "self",
  })

function wiModelSelectionController() {
  let self = this

  this.$onInit = function() {
    self.modelDefs = models.definitions
  }
}

require("./type-params/number.js")
require("./type-params/choice.js")
require("./type-params/boolean.js")
require("./type-params/array.js")
