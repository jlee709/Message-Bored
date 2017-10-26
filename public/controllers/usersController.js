// starting thing 

var app = angular.module("myApp");

app.controller('firstCtrl', function ($scope, myService) {
  $scope.user = myService.user;  
});

app.controller('secondCtrl', function ($scope, myService) {
  $scope.otheruser = myService.user;  
});

app.service('myService', function(){
  this.user = {};
});