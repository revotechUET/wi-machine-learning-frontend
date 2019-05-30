require("./style.less")

angular.module("wiMachineLearning", [
  "mgo-angular-wizard",
  "wiApi", 
  "wiTreeView",
  "wiDroppable",
  "editable"
])

require("./components/wi-machine-learning")
require("./components/wi-curves-selection")
require("./components/wi-wells-selection")
require("./components/wi-model-selection")
require("./components/wi-machine-learning-navigator")
require("./components/wi-curve-node")
require("./components/wi-ml-settings")
