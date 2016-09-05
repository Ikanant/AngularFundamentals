'use strict';

eventsApp.directive('eventsThumbnail', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/directivesData/eventThumbnail.html'
  }
});
