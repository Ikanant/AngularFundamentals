'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll, $routeParams, $route) {

        var idParam = $routeParams.eventId;
        $scope.sortorder = 'name'

        $scope.event = eventData.getEvent(idParam)
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

        $scope.scrollToSession = function(){
          $anchorScroll();
        }

        $scope.reload = function(){
          $route.reload();
        }
    }
);
