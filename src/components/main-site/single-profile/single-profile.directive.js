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
              userService.getOne('5719260549f05f1100105ded')
              .then(function(user) {
                $scope.oneUser = user.data.data;
                $scope.oneUser.interestedIn = [];
              })
            }
            $scope.check0 = "";
            $scope.check1 = "";
            $scope.check2 = "";
            $scope.check3 = "";

            $scope.interestedArr = [];

            $scope.$watchGroup(['check0', 'check1', 'check2', 'check3'],
            function (vals) {
              // vals.forEach(function(el) {
              //   if(el !== "") {interestedArr.push(el);}
              //   console.log(interestedArr);
              // })
              $scope.interestStrings = vals;
              // console.log($scope.oneUser.interestedIn);
            });


            $scope.updateUser = function(data) {
              // console.log('old:::', data.interestedIn);
              $scope.interestStrings.forEach(function(el) {
                if(el !== "") {
                  $scope.interestedArr.push(parseInt(el));
                }
              })
              data.interestedIn = $scope.interestedArr;
              console.log('new:::', data.interestedIn);
              // $scope.oneUser.interestedIn = $scope.newInterests;
              console.log(data);
              // userService.updateOne($rootScope.currentUser.id, data)
              userService.updateOne($rootScope.currentUser.id, data)
              .then(function(user) {
                console.log(user);
              })
            }
            // $scope.getOneUser('$rootScope.currentUser.id');
            $scope.getOneUser('5719260549f05f1100105ded');
          }
      }
    }


})();