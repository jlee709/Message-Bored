// starting thing 
console.log('Users controller');

var app = angular.module("myApp")
.controller('usersController', ['$scope','usersService',function($scope, usersService) {
   usersService.getUsers()
   .then(function(users) {
    $scope.users = users;
   });
}]);

 

// app.controller('firstCtrl', function ($scope, myService) {
//   $scope.user = myService.user;  
// });



//service to get HTTP req form a link 

// eds example 

