(function() {

  'use strict';

  angular
    .module('concatApp')
    .filter('lookingFor', lookingFor);

  function lookingFor() {
    return function(input) {
      if(input === 0) {
        return 'A Mentor';
      } else if(input === 1) {
        return 'Someone to Mentor';
      } else if(input === 2) {
        return 'General Dev Chats';
      } else if(input === 3) {
        return 'Collaboration';
      }
    }
  }

})();