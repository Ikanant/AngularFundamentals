'use strict';

eventsApp.directive('dateKeys', function(){
  return {
    restrict: 'A', // Attribute only (don't need template)
    link: function($scope, element, attrs, controller) {
      element.on('keydown', function(event){
        return isNumeric(event);
      });
    }
  }

  function isNumeric(e){
    if (e.keyCode>45 && e.keyCode<58 || e.keyCode==191 || e.keyCode==8) {
         return true;
    }
    return false;
  }
});
