'use strict';

eventsApp.directive('myDirective', function($compile){
  return {
    link: function (scope, element, attrs, controller) {
      var markup = '<input type="text" name="apple" ng-model="test"/> <h1>{{test}}</h1>';
      angular.element(element).html($compile(markup)(scope));
    }
  }
});
