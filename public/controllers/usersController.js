//jshint esversion:6
console.log('Users Controller Here!');


angular.module('MessageBored')
.controller('UserController', ['$scope','$http','$routes',function ($scope, $http, $routes) {

    //for all users
    $scope.users = '';
    $http({
      method: 'GET',
      url: `/api/users/`
    })
    .then(());
   

  }
]);