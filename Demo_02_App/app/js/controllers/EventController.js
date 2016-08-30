'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {

        $scope.sortorder = 'name'

        $scope.event = eventData.event;

        $scope.totalVote = function(){
          return eventData.getTotalVoteCount($scope.event);
        };

        $scope.ourfunction = function(a, b){
          return calculator.reverse(a, b);
        };

        $scope.upVoteSession = function upVoteSession(session){
                session.upVoteCount++;
        }
        $scope.downVoteSession = function downVoteSession(session){
            if (session.upVoteCount>0) session.upVoteCount--;
        }
    }
);
