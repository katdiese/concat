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
            $scope.currentOffset = 0;
            $scope.getUsers = function(limit, offset) {
              userService.getAll(limit, offset)
              .then(function(users) {
                console.log(users);
                $scope.users = users.data.data;
              })
            }
            $scope.paginate = function(direction) {
              if(direction === 'forward') {
                $scope.currentOffset += 11;
              } else if (direction === 'backward') {
                $scope.currentOffset -= 11;
              }
                $scope.getUsers(10,$scope.currentOffset);
              }
            $scope.getUsers(10,$scope.currentOffset);

          }
      }
    }

})();