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
        function($rootScope, $scope, $location, authService) {
          $scope.showLogin = true;
          $scope.month = "";
          $scope.day = "";
          $scope.year = "";
          $scope.toggleForm = function() {
            $scope.showLogin = !$scope.showLogin;
          }
          $scope.user = {};

          $scope.$watchGroup(['month', 'day', 'year'],
            function (vals) {
              $scope.user.dob = vals.join("/")
            })

          $scope.$watchGroup(['user.names.firstName', 'user.username'],
            function (vals) {
              $scope.user.slug = vals.join("-");
            });

          $scope.login = function() {
            authService.login($scope.user)
            .then(function(user) {
              authService.setUserInfo(user);
              $location.path('/users');
              $rootScope.currentUser = JSON.parse(authService.getUserInfo());
            })
            .catch(function(err) {
              console.log(err);
            })
          }
          $scope.register = function() {
            authService.register($scope.user)
              .then(function(user) {
                authService.setRegisterUserInfo(user);
                $location.path('/users');
                $rootScope.currentUser = JSON.parse(authService.getUserInfo());
              })
              .catch(function(err) {
                console.log(err);
              });
          }
        }
      }
    }

})();