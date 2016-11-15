var app = angular.module('cbaNutApp',['ngRoute']);

app.controller('mainCtrl',function() {
  var vm = this;
  vm.text = "Hello World"
  vm.number = 1 + 3;
})
