(function() {

  'use strict';

  angular
    .module('concatApp')
    .service('authService', authService);

    authService.$inject = ['$http', '$window'];

    function authService($http, $window) {
      var config = {
        headers: {
          'Accept': 'application/json'
        }
      };
      var user = {};
      var dataApi = 'https://galvanize-student-apis.herokuapp.com/gdating';
      return {
        login: function(user) {
          return $http.post(dataApi + '/auth/login', user, config);
        },
        logout: function(user) {
          user = null;
          $window.localStorage.clear();
        },
        register: function(user) {
          return $http.post(dataApi + '/auth/register', user, config);
        },
        setUserInfo: function(userData) {
          $window.localStorage.setItem('user', JSON.stringify(userData.data.data.user.email));
          $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
        },
        setRegisterUserInfo: function(userData) {
          $window.localStorage.setItem('user', JSON.stringify(userData.data.data.data.email));
          $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
        },
        getUserInfo: function(userData) {
          return {
            id: userData.data.data.user._id,
            slug: userData.data.data.user.slug
          }
        },
      };
    }

})();