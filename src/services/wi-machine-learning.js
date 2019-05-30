function Service(wiApi) {
  this.project = undefined
  this.model = undefined
  this.inputCurves = undefined
  this.inputWells = undefined
}

Service.prototype.setProject = function(project) {
  this.project = project
}

Service.prototype.getProject = function() {
  return this.project
}

Service.prototype.setModel = function(model) {
  this.model = model
}

Service.prototype.getModel = function() {
  return this.model
}

Service.prototype.setInputCurves = function(inputCurves) {
  this.inputCurves = inputCurves
}

Service.prototype.getInputCurves = function() {
  return this.inputCurves
}

Service.prototype.setInputWells = function(inputWells) {
  this.inputWells= inputWells
}

Service.prototype.getInputWells = function() {
  return this.inputWells
}

angular.module("wiMachineLearning").factory("state", (wiApi) => {
  return new Service(wiApi)
})
