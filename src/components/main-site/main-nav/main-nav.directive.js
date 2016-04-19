(function() {

  'use strict';

  angular
    .module('concatApp')
    .directive('mainNav', mainNav);

    function mainNav() {
      return {
        restrict: 'E',
        templateUrl: 'components/main-site/main-nav/main-nav.html.html'
      }
    }

})();