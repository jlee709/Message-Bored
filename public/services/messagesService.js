console.log('messages service here');

var app = angular.module("myApp");

app.service('messagesService', ['$http',function($http) {
//replce url with api
this.uApi = 'http://localhost:3000/api/';
  //returns a promise 
this.getMessages = function(){
  return $http.get(this.uApi + 'messages')
  .then(function(res){
    return res.data;
    });
  };

  this.create = function(message){ // <-- change
    var newMessage = {
      messageBody: '',
    };

    console.log(data, ' DATA DATA DATA DATA ');
    return $http.post(this.uApi + 'login', {username: username , password: password})
    .then(function(res) {
      return res.data;
    });
  };
}]);