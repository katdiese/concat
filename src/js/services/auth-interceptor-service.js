(function() {

  'use strict';

  angular.module('concatApp')
  .service('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$window'];

  function authInterceptor($window) {
    return {
      request: function(config) {
        var token = $window.localStorage.getItem('token');
        if(token) {
          //server configuration option
          // config.headers.Authorization = "Bearer " + token;
        }
        return config;
      }
    };
  }

})();