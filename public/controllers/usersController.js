// starting thing 
console.log('Users controller');

var app = angular.module("myApp")
.controller('usersController', ['$scope','usersService',function($scope, usersService) {
   usersService.getUsers()
   .then(function(users) {
    $scope.users = users;
   });
   
   $scope.username = '';
   $scope.password = '';

   usersService.create($scope.username, $scope.password)
   .then(function(data){
    console.log(data, ' DATA HERE !!!');
   })
   .catch(function(err){
      console.log("broken numb nuts");
   });
}]);
