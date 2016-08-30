'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {

        $scope.sortorder = 'name'

        $scope.event = eventData.getEvent()
          .$promise
          .then(function(event) {$scope.event = event; })
          .catch(function(response) { console.log(response);});

        $scope.totalVote = function(){
          return eventData.getTotalVoteCount($scope.event);
        };

        $scope.upVoteSession = function upVoteSession(session){
                session.upVoteCount++;
        }
        $scope.downVoteSession = function downVoteSession(session){
            if (session.upVoteCount>0) session.upVoteCount--;
        }
    }
);
