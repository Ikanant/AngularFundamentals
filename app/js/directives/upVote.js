'use strict';

eventsApp.directive('upvote', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/directivesData/upVote.html',
  }
});
