console.log('Topics Controller Here!');

var app = angular.module("myApp")
.controller('topicsController', ['$scope','topicsService',function($scope, topicsService) {
   topicsService.getTopics()
   .then(function(topics) {
    $scope.topics = topics;

    
   });
}]);