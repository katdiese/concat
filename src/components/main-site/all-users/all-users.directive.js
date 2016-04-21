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
            $scope.currentOffset = 0;
            $scope.getUsers = function(limit, offset) {
              userService.getAll(limit, offset)
              .then(function(users) {
                $scope.users = users.data.data;
              })
            }
            $scope.getOneUser = function(id) {
              userService.getOne(id)
              .then(function(user) {
                $scope.oneUser = user.data.data;
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