(function() {

  'use strict';

  angular
    .module('concatApp')
    .directive('allUsers', allUsers);

    function allUsers() {
      return {
        restrict: 'E',
        templateUrl: 'components/main-site/all-users/all-users.html.html',
        controller:
          function($scope, userService) {
            $scope.message = "You got to all users!"
            $scope.getUsers = function(limit, offset) {
              userService.getAll(limit, offset)
            }
            $scope.getUsers(10,0);
          }
      }
    }

})();