'use strict';

eventsApp.directive('collapsible', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div><h4 class="well-title">{{title}}</h4><div ng-transclude></div></div>',
    transclude: true,
    scope: {
      title: '@'
    }
  }
});
