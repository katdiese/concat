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
            $scope.check0 = "";
            $scope.check1 = "";
            $scope.check2 = "";
            $scope.check3 = "";

            $scope.newInterests = [];

            $scope.$watchGroup(['check0', 'check1', 'check2', 'check3'],
            function (vals) {
              // vals.forEach(function(el) {
              //   if(el !== "") {arr.push(el);}
              //   console.log(arr);
              // })
              $scope.interestArr = vals;
              // console.log($scope.oneUser.interestedIn);
            });

            $scope.oneUser.interestedIn = [1,2];

            $scope.updateUser = function(data) {
              // data.interestedIn = [];
              // console.log('old:::', data.interestedIn);
              // $scope.interestArr.forEach(function(el) {
              //   if(el !== "") {
              //     data.interestedIn.push(parseInt(el));
              //   }
              // })
              // data.interestedIn = $scope.newInterest;
              // console.log('new:::', data.interestedIn);
              // $scope.oneUser.interestedIn = $scope.newInterests;
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