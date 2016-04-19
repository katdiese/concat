// sample angular code

angular.module('concatApp', ['ngRoute']);

angular.module('concatApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<landing-page></landing-page>'
      })
      .when('/users', {
        template: '<main-nav></main-nav><all-users></all-users><footer-content></footer-content>'
      })
  })