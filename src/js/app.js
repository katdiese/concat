// sample angular code

angular.module('concatApp', ['ngRoute']);

app.controller('myController', ['$scope', function($scope) {
  $scope.greeting = "Hello World!";
}]);
