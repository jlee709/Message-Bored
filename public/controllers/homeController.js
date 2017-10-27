var app = angular.module("myApp")
.controller('homeController', ['$scope','usersService',function($scope, usersService) {
   usersService.getUsers()
   .then(function(users) {
    $scope.users = users;
   });
}]);