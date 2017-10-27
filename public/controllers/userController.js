// for specific user

var app = angular.module("myApp")
.controller('userController', ['$scope','userService',function($scope, userService) {
   userService.findUser()
   .then(function(user) {
    $scope.user = user;
   });
}]);

