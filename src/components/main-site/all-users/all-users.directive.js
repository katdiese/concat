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
            $scope.currentDisplay = 10;
            $scope.displayMore = function() {
              $scope.currentDisplay += 10;
            }
            $scope.getOneUser = function(id) {
              userService.getOne(id)
              .then(function(user) {
                $scope.oneUser = user.data.data;
              })
            }
            $scope.getUsers = function() {
              userService.getAll()
              .then(function(users) {
                $scope.allUsers = users.data.data;
                $scope.users = users.data.data;
              })
            }
            $scope.getUsers();
            $scope.popularFilter = function() {
              $scope.users = $scope.allUsers.filter(function(el) {
                return el._matches.length > 8
              })
            }
            $scope.nearbyFilter
            $scope.matchesFilter = function() {
              $scope.users = $scope.allUsers.filter(function(el) {
              return el._matches.filter(function(arr) {
                return arr === '5719234249f05f11000fdb6f';
              }).length > 0;
            })
            }
          }
      }
    }

})();