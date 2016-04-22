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
            $scope.oneUser = "something";
            $scope.displayMore = function() {
              $scope.currentDisplay += 10;
            }
            $scope.getOneUser = function(id) {
              $scope.oneUser = "";
              userService.getOne(id)
              .then(function(user) {
                $scope.oneUser = user.data.data;
              })
            }
            $scope.getUsers = function() {
              $scope.users = "";
              userService.getAll()
              .then(function(users) {
                $scope.allUsers = users.data.data;
                $scope.users = users.data.data;
              })
            }
            $scope.popularFilter = function() {
              $scope.users = $scope.allUsers.filter(function(el) {
                return el._matches.length > 8
              })
            }
            $scope.nearbyFilter = function() {
              $scope.users = $scope.allUsers.filter(function(el) {
                return 123 - el.address.geo.lat < 10 && 123 - el.address.geo.lng < 10;
              })
            }
            $scope.matchesFilter = function() {
              $scope.users = $scope.allUsers.filter(function(el) {
                return el._matches.filter(function(arrEl) {
                  return arrEl === '5719234249f05f11000fdb6f';
                }).length > 0;
              })
            }
            $scope.getUsers();
          }
      }
    }

})();