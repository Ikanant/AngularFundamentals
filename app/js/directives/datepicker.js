'use strict'

eventsApp.directive('datepicker', function(){
  return {
    Restrict: 'A',
    link: function(scope, element){
      element.datepicker();
    }
  }
});
