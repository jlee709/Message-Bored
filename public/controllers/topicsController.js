console.log('Topics Controller Here!');

var app = angular.module("myApp")
.controller('topicsController', ['$scope','topicsService',function($scope, topicsService) {
  console.log(topicsService, ' I AM HERE FUCK FUCK');
   topicsService.getTopics()
   .then(function(topics) {
    $scope.topics = topics;
   });
}]);