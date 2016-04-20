(function() {

  'use strict';

  angular
    .module('concatApp')
    .filter('interests', interests)
    .filter('youAre', youAre);

  function interests() {
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

  function youAre() {
    return function(input) {
      if(input === 0 || input === 1) {
        return "Mentor";
      } else if(input === 2 || input === 3) {
        return "Grasshopper";
      }
    }
  }

})();