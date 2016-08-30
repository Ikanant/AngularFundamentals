'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {

        $scope.sortorder = 'name'

        $scope.event = eventData.getEvent()
          .success(function(event){
              $scope.event = event;
            })
          .error(function (data, status, headers, config){
              $log.warn(data, status, headers, config);
            });

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
