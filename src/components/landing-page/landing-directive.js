(function() {
  'use strict';

  angular
    .module('concatApp')
    .directive('landingPage', landingPage);

    function landingPage() {
      return {
      restrict: 'E',
      templateUrl: 'components/landing-page/landing.html',
      controller:
        function($scope) {
          $scope.message = "Welcome to the landing page of Concat!!"
        }
      }
    }

})();