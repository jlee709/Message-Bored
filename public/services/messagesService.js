console.log('messages service here');

var app = angular.module("myApp");

app.service('topicsService', ['$http',function($http) {
//replce url with api
this.uApi = 'http://localhost:3000/api/';
  //returns a promise 
this.getMessages = function(){
  return $http.get(this.uApi + 'messages')
  .then(function(res){
    return res.data;
    });
  };
}]);