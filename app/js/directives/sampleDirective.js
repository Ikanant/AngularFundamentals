'use strict'

eventsApp.directive('mySampleDirective',
  function(){
    return {
      require: 'E',
      template: '<input type="text" ng-model="apple"/> {{apple}}'
    }
  }
);
