console.log('User service Here!');

var app = angular.module("myApp");

app.service('userService', ['$http',function($http) {
//replce url with api
  this.uApi = 'http://localhost:3000/api/';
  
  //returns a promise 
  this.findUser = function(){
    return $http.get(this.uApi + 'user/:id')
    .then(function(res){
      return res.data;
    });
  };
}]);