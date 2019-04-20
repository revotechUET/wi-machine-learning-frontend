const nameModule = "wiDataSelection"
const nameComponent = "wiDataSelection"
const style = require("./style.less")
const template = require("./template.html")
module.exports.name = nameModule
module.exports.nameComponent = nameComponent


angular.module(nameModule,[ 
  "sideBar", "wi-base-treeview","wiLogin", "ngDialog", "mgo-angular-wizard"
  ]
)
.component(nameComponent, {
    template: template,
    controller: WiDataSelectionController,
    controllerAs: "self",
    bindings: {
    }
});

function WiDataSelectionController($scope, $http, ngDialog, wiToken) {
  this.$onInit = function() {
    console.log("On Init");
  }

  this.onFinish = function() {
    console.log("Finish!!!");
  }

  this.onCancel = function() {
    console.log("Cancel");
  }


}
