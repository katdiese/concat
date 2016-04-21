(function() {

  'use strict';

  angular
    .module('concatApp')
    .config(appConfig)
    .run(routeChange)

  appConfig.$inject = ['$routeProvider', '$httpProvider'];
  routeChange.$inject = ['$rootScope', '$location', '$window', 'authService'];

  function appConfig($routeProvider, $httpProvider) {
    $routeProvider
    .when('/', {
      template: '<landing-page></landing-page><footer-content></footer-content>',
      restricted: false,
      preventLoggedIn: true
    })
    .when('/users', {
      template: '<main-nav></main-nav><all-users></all-users><footer-content></footer-content>',
      restricted: true,
      preventLoggedIn: false
    })
    .when('/logout', {
      restricted: false,
      preventLoggedIn: false,
      resolve: {
        test: function(authService, $rootScope, $location) {
          authService.logout();
          $rootScope.currentUser = authService.getUserInfo();
          $location.path('/');
        }
      }
    })
    .otherwise({redirectTo: '/'});
    $httpProvider.interceptors.push('authInterceptor');
  }

  function routeChange($rootScope, $location, $window, authService) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      //if route is restricted and no token is present
      console.log(next.preventLoggedIn);
      if(next.restricted && !window.localStorage.getItem('token')) {
        $location.path('/');
      }
      if(next.preventLoggedIn && window.localStorage.getItem('token')) {
        $location.path('/users');
      }
    });
  }

})();