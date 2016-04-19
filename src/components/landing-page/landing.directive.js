(function() {

  'use strict';

  angular
    .module('concatApp')
    .directive('landingPage', landingPage);

    function landingPage() {
      return {
      restrict: 'E',
      templateUrl: 'components/landing-page/landing.html.html',
      controller:
        function($scope) {
          $scope.showLogin = true;
          $scope.toggleForm = function() {
            $scope.showLogin = !$scope.showLogin;
          }
        }
      }
    }

})();