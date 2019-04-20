const wiServiceName = "wiUserProject"
const moduleName = "wi-user-project"

let app = angular.module(moduleName, ["wiToken"]);

function Service($http, wiToken) {
  this.$http = $http
  this.wiToken = wiToken
  this.token = this.wiToken.getToken()
}

Service.prototype.getProjectList = function(callback) {
  if (!this.token) {
    toastr.error("Please login!!!")
  }
  else {
    this.$http({
      method: 'POST',
      url: 'http://dev.i2g.cloud/project/list',
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
    method: 'POST',
    url: 'http://dev.i2g.cloud/project/well/list',
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


app.factory(wiServiceName, function($http, wiToken) {
  return new Service($http, wiToken)
})

exports.name = moduleName
