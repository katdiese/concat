(function() {

  'use strict';

  angular
    .module('concatApp')
    .service('userService', userService);

    userService.$inject = ['$http'];

    function userService($http) {
      var dataApi = 'https://galvanize-student-apis.herokuapp.com/gdating'
      return {
        getAll: function(limit, offset) {
          return $http.get(dataApi + '/members?limit=' + limit + '&offset=' + offset)
          .then(function(res) {
            return res;
          })
          .catch(function(err) {
            return err;
          });
        },
        getOne: function(id) {
          return $http.get(dataApi + '/members/' + id)
          .then(function(res) {
            return res;
          })
          .catch(function(err) {
            return err;
          });
        }
      }
    }

})();