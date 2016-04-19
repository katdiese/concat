// sample angular code

angular.module('concatApp', ['ngRoute']);

angular.module('concatApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<landing-page></landing-page>'
      })
  })