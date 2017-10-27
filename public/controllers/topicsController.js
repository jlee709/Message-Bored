console.log('Topics Controller Here!');

var app = angular.module("myApp")
.controller('topicsController', ['$scope','topicsService',function($scope, topicsService) {
   usersService.getTopics()
   .then(function(topics) {
    $scope.topics = topics;
   });
}]);