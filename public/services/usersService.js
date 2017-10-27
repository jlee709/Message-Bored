//jshint esversion:6

console.log('Users service Here!');

var app = angular.module("myApp");

app.service('usersService', ['$http',function($http) {
//replce url with api
  this.uApi = 'http://localhost:3000/api/';
  
  this.getUsers = function(){
    return $http.get(this.uApi + 'users')
    .then(function(res){
      return res.data;
    });
  };
}]);
  // this.addBook = function(givenBook) {
  //   if (!givenBook) { return; }
  //   var book = {
  //     title: givenBook.title,
  //     author: givenBook.author
  //   };
  //   books.push(book);
  // };















//OLD CODE BELOW NOT WORK


// app.service('myService', function(){
//   this.user = {};
// });


// app.controller('usersController', function($scope, $http) {
//     $http.get("api/users")
//     .then(function (response) {
//         $scope.myWelcome = response.data;
//     });
// });



// angular.module('myApp')
// .controller('usersController', ['$scope','$http','$routes',function ($scope, $http, $routes) {
//     //for all users
//     $scope.users = '';
//     $http({
//       method: 'GET',
//       url: `/api/users/`
//     })
//     .then((data, status, headers, config) =>{
//       $scope.users = data.data;
//     })
//     .catch(() => {
//       console.log(err);
//     });
//     // is logged in? logged out? 
//   }
// ]);

// //service function for users
// function getAllusers(){
//  return users.all();
// }

// function getUser(){
//   return users.findById(req.params.id);
// }

