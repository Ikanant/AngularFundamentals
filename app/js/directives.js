'use strict';

eventsApp.directive('myDirective', function($compile){
  return {
    restrict: 'E',
    template: '<input type="text" name="apple" ng-model="test"/> <h1>{{test}}</h1>'
  }
});
