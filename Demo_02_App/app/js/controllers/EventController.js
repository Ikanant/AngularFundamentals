'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, calculator) {

        $scope.sortorder = 'name'

        $scope.event = eventData.event;

        $scope.a = '1';
        $scope.b = '2';

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
