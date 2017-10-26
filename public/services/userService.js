//jshint esversion:6

console.log('Users service Here!');

angular.module('myApp')
.controller('usersController', ['$scope','$http','$routes',function ($scope, $http, $routes) {
    //for all users
    $scope.users = '';
    $http({
      method: 'GET',
      url: `/api/users/`
    })
    .then((data, status, headers, config) =>{
      $scope.users = data.data;
    })
    .catch(() => {
      console.log(err);
    });
    // is logged in? logged out? 
  }
]);

//service function for users
function getAllusers(){
 return users.all();
}

function getUser(){
  return users.findById(req.params.id);
}

