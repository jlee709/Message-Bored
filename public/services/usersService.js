//jshint esversion:6

console.log('Users service Here!');

var app = angular.module("myApp");

app.service('usersService', ['$http',function($http) {
//replce url with api
  this.uApi = 'http://localhost:3000/api/';
  
  //returns a promise 
  this.getUsers = function(){
    return $http.get(this.uApi + 'users')
    .then(function(res){
      return res.data;
    });
  };
  // create a user 
  this.create = function(username, password){
    console.log(username,password, ' HOLY SHIT!');
    let data = {
      username: username,
      password: password
    };

    console.log(data, ' DATA DATA DATA DATA ');
    return $http.post(this.uApi + 'users/register', {username: username , password: password})
    .then(function(res) {
      return res.data;
    });
  };
}]);
