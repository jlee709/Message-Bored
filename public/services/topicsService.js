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

  this.create = function(title){ // <-- change
    let data = {
      title: ''
    };

    console.log(data, ' DATA DATA DATA DATA ');
    return $http.post(this.uApi + 'topics/new', {title: title})
    .then(function(res) {
      return res.data;
    });
  };
}]);