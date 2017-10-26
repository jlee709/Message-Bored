// creating a new module
angular.module('myApp', ['ngRoute', 'ngController']);

// getting back that new module
var app = angular.module('myApp')
.config(['message_bored', '$routeProvider', '$locationProvider', function(MoviesProvider, $routeProvider, $locationProvider) {
  // configure Movies
  message_bored.setUrl('http://localhost:3000/api/home');

  // THE ROUTES
  // $routeProvider
  // .when('/', {
  //   templateUrl: '/views/home.html',
  //   controller: 'HomeController'
  // })
  // .when('/books', {
  //   templateUrl: '/views/books.html',
  //   controller: 'BooksController'
  // })
  // .when('/movies', {
  //   templateUrl: '/views/movies.html',
  //   controller: 'MoviesController'
  // })
  // .otherwise({
  //   template: '<h1>Suck It</h1>'
  // });

  // this gets rid of #!
  // $locationProvider.html5Mode(true);
}])
.run(['APP_VERSION', '$rootScope', function(APP_VERSION, $rootScope) {
  // run goes here
  $rootScope.APP_VERSION = APP_VERSION;
}]);