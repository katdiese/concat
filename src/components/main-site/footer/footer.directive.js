(function() {

  'use strict';

  angular
    .module('concatApp')
    .directive('footerContent', footerContent);

    function footerContent() {
      return {
        restrict: 'E',
        templateUrl: 'components/main-site/footer/footer.html.html'
      }
    }

})();