angular.module('myApp')
.controller('BooksController', ['$scope', 'BookService', function($scope, BookService) {
  $scope.bookSearch = '';
  $scope.BookService = BookService;

  $scope.newBook = {
    title: '',
    author: ''
  };

  $scope.addBook = function(e) {
    BookService.addBook($scope.newBook);
    $scope.newBook.title = '';
    $scope.newBook.author = '';
  };
}]);