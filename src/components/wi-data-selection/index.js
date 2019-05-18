const nameModule = "wiDataSelection"
const nameComponent = "wiDataSelection"
const style = require("./style.less")
const template = require("./template.html")
module.exports.name = nameModule
module.exports.nameComponent = nameComponent


require("../../services/wi-user-project.js")

angular.module(nameModule,[ 
  "sideBar", "wi-base-treeview","wiLogin", "ngDialog", "mgo-angular-wizard",
  "wi-user-project",
  ]
)
.component(nameComponent, {
    template: template,
    controller: WiDataSelectionController,
    controllerAs: "self",
    bindings: {
    }
});

function WiDataSelectionController($scope, $http, ngDialog, wiToken,
  wiUserProject,
) {
  let self = this

  this.$onInit = function() {
    self.listOfProject = []
    self.listOfWell = []
    self.listOfSelectedWell = []
    self.indexOfChoiceProject = 0
    self.indexOfChoiceWell = 0
    self.indexOfChoiceSelectedWell = 0

    $scope.$watch(() => {
      return localStorage.getItem("token");
    }, (newValue, oldvalue) => {
      let token = localStorage.getItem("token") 
      if (token !== null) {
        wiUserProject.setToken(token)
        wiUserProject.getProjectList((listOfProject) => {
          self.updateViewProjectList(listOfProject)
          wiUserProject.getCurveList((curveList) => {
            console.log(curveList)
          })
        })
      }
    })
  }

  this.updateViewProjectList = function(projects) {
    let listOfProject = []
    for (let index = 0; index < projects.length; index++) {
      listOfProject.push({
        data: {
          icon: "project-normal-16x16",
          label: projects[index].alias,
        },
        properties: projects[index]
      });
    }
    self.listOfProject = listOfProject
  }

  this.updateViewWellList = function(wells) {
    let listOfWell = []
    for (let index = 0; index < wells.length; index++) {
      listOfWell.push({
        data: {
          icon: "well-16x16",
          label: wells[index].name,
        },
        properties: wells[index]
      });
    }
    self.listOfWell = listOfWell
    if (listOfWell.length === 0) {
      toastr.error("Well not found");
    }
  }

  this.onClickProjectItem = function(index) {
    let idProject = self.listOfProject[index].properties.idProject
    self.indexOfChoiceProject = index
    wiUserProject.getWellList(idProject, (listOfWell) => {
      self.updateViewWellList(listOfWell)
    })
  }

  this.onClickWellItem = function(index) {
    self.indexOfChoiceWell = index
  }

  this.onClickSelectedWellItem = function(index) {
    self.indexOfChoiceSelectedWell = index
  }

  this.onClickRefreshWellList = function() {
    try {
      let selectedProject = self.listOfProject[self.indexOfChoiceProject]
      let idProject = selectedProject.properties.idProject 
      wiUserProject.getWellList(idProject, (listOfWell) => {
        self.updateViewWellList(listOfWell)
      })
    }
    catch (error) {
      toastr.error("Please select project")
      console.error(error)
    }
  }

  this.onClickPushSelectedWell = function() {
    try {
      let wellSeleted = self.listOfWell[self.indexOfChoiceWell] 
      self.listOfSelectedWell.push(wellSeleted)
    }
    catch (err) {
      toastr.error("Select well before push into bucket")
      console.error(err)
    }
  }

  this.onClickRemoveSelectedWell = function() {
    try {
      let index = self.indexOfChoiceSelectedWell
      self.listOfSelectedWell.splice(index, 1)
    } 
    catch (error) {
      toastr.error("Please select project")
      console.error(error)
    }
  }
}
