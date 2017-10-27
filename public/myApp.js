// creating a new module
angular.module('myApp', ['ngRoute']);

// getting back that new module
var app = angular.module('myApp')
.config(['$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider) {
  // configure Movies
  // "message_bored.setUrl('http://localhost:3000/api/home');"

  // THE ROUTES
  $routeProvider
  .when('/', {
    templateUrl: '/views/home.html',
    controller: 'homeController'
  })
  .when('/home', {
    templateUrl: '/views/home.html',
    controller: 'homeController'
  })
  .when('/users', {
    templateUrl: '/views/users.html',
    controller: 'usersController'
  })

  .when('/users/:id', {
    templateUrl: '/views/user.html',
    controller: 'userController'
  })

  .when('/topics', {
    templateUrl: '/views/topics.html',
    controller: 'topicsController'
  })

  .otherwise({
    template: '<h1>SCREAMING BEAVER ITS BROKEN!!!!</h1>'
    
  });

 
 $locationProvider.html5Mode(true);
  // this gets rid of #!
  // $locationProvider.html5Mode(true);
}]);
