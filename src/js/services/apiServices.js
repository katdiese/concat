(function() {

  'use strict';

  angular
    .module('concatApp')
    .service('userService', userService);

    userService.$inject = ['$http'];

    function userService($http) {
      var dataApi = 'https://galvanize-student-apis.herokuapp.com/gdating';
      return {
        getAll: function() {
          return $http.get(dataApi + '/members', {})
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
        },
        updateOne: function(id, updates) {
          return $http.put(dataApi + '/members/' + id, updates)
          .then(function(res) {
            return res;
          })
          .catch(function(err) {
            return err;
          })
        }
      }
    }

})();