//jshint esversion:6

var app = angular.module("myApp");

app.service('topicsService', ['$http',function($http) {
//replce url with api
this.uApi = 'http://localhost:3000/api/';
  //returns a promise 
this.getTopics = function(){
  return $http.get(this.uApi + 'topics')
  .then(function(res){
    return res.data;
    });
  };
}]);