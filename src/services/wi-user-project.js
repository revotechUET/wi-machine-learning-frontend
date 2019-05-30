const wiServiceName = "wiUserProject"
const moduleName = "wi-user-project"

const WI_BACKEND_SERVER = "http://dev.i2g.cloud"
const LIST_OF_PROJECT_API = "/project/list"
const LIST_OF_WELL_API = "/project/well/list"
const LIST_OF_CURVE_API = "/project/well/reference-curve/list"

let app = angular.module(moduleName, []);

function Service($http) {
  this.$http = $http
  this.token = ""
}

Service.prototype.setToken = function(token) {
  this.token = token
}

Service.prototype.getProjectList = function(callback) {
  if (!this.token) {
    toastr.error("Please login!!!")
  }
  else {
    this.$http({
      method: "POST",
      url: WI_BACKEND_SERVER + LIST_OF_PROJECT_API,
      data: {},
      headers: {
        "Authorization": this.token,
      }
    }).then(function (response) {
      let data = response.data.content
      callback(data)
    }, function (errorResponse) {
      console.error(errorResponse)
    }); 
  }
}

Service.prototype.getWellList = function(idProject, callback) {
  this.$http({
    method: "POST",
    url: WI_BACKEND_SERVER + LIST_OF_WELL_API,
    data: {
      idProject: idProject
    },
    headers: {
      "Authorization": this.token,
    }
  }).then(function (response) {
    let data = response.data.content
    callback(data)
  }, function (errorResponse) {
    console.error(errorResponse)
  }); 
}

Service.prototype.getCurveList = function(callback) {
  if (!this.token) {
    toastr.error("Please login!!!")
  }
  else {
    this.$http({
      method: "POST",
      url: WI_BACKEND_SERVER + LIST_OF_CURVE_API,
      data: {},
      headers: {
        "Authorization": this.token,
      }
    }).then(function (response) {
      let data = response.data.content
      callback(data)
    }, function (errorResponse) {
      console.error(errorResponse)
    }); 
  }
}

app.factory(wiServiceName, function($http) {
  return new Service($http)
})

exports.name = moduleName
