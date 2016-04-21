(function() {

  'use strict';

  angular
    .module('concatApp')
    .service('singleUserService', singleUserService);

    singleUserService.$inject = ['$http'];

    function singleUserService($http) {
      var dataApi = 'https://galvanize-student-apis.herokuapp.com/gdating';
      return {

      }
    }

})();