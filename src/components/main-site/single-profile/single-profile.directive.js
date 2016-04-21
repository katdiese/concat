(function() {

  'use strict';

  angular
    .module('concatApp')
    .directive('singleProfile', singleProfile);

    function singleProfile() {
      return {
        restrict: 'E',
        templateUrl: 'components/main-site/single-profile/single-profile.html.html'
      }
    }


})();