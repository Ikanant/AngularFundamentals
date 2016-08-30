'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {

        $scope.sortorder = 'name'

        $scope.event = eventData.event;

        $scope.upVoteSession = function upVoteSession(session){
                session.upVoteCount++;
        }
        $scope.downVoteSession = function downVoteSession(session){
            if (session.upVoteCount>0) session.upVoteCount--;
        }
    }
);
