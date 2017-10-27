console.log('Message Cntrler Here');


var app = angular.module("myApp")
.controller('messagesController', ['$scope','messagesService',function($scope, mesagesService) {
   messagesService.getMessages()
   .then(function(messages) {
    $scope.messages = messages;
   });
}]);