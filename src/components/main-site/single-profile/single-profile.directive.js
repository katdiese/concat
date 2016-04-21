(function() {

  'use strict';

  angular
    .module('concatApp')
    .directive('singleProfile', singleProfile);

    function singleProfile() {
      return {
        restrict: 'E',
        templateUrl: 'components/main-site/single-profile/single-profile.html.html',
        controller:
          function($rootScope, $scope, userService) {
            $scope.getOneUser = function(id) {
              userService.getOne(id)
              .then(function(user) {
                $scope.oneUser = user.data.data;
              })
            }
            $scope.updateUser = function(data) {
              userService.updateOne($rootScope.currentUser.id, data)
              .then(function(user) {
                console.log(user);
              })
            }
            $scope.getOneUser($rootScope.currentUser.id);
          }
      }
    }


})();