// starting thing 
console.log('Users controller');

var app = angular.module("myApp")
.controller('usersController', ['$scope','usersService',function($scope, usersService) {
   usersService.getUsers()
   .then(function(users) {
    console.log(users, 'FUCKKKKKKKKKK!');
    $scope.users = users;
   });
   
   $scope.username = '';
   $scope.password = '';

   $scope.create = function(){
    console.log($scope.username, $scope.password);
     usersService.create($scope.username, $scope.password)
     .then(function(data){
      console.log(data, ' DATA HERE !!!');
     })
     .catch(function(err){
        console.log("broken numb nuts");
     });
   };
}]); //end of .Controller
