console.log('Topics Controller Here!');

var app = angular.module("myApp")
.controller('topicsController', ['$scope','topicsService',function($scope, topicsService) {
  console.log(topicsService, ' THIS IS THE topics SERVICE!! FAK!');
   topicsService.getTopics()
   .then(function(topics) {
    $scope.topics = topics;
   });

   topicsService.create(){

   }
}]);