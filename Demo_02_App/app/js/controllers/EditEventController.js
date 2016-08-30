'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        $scope.saveEvent = function(event, newEventForm){
          if(newEventForm.$valid){
            window.alert('Event: ' + event.name + ' has been saved.');
          }
        };

        $scope.cancelEvent = function() {
          window.location = "/EventDetails.html";
        }
    }
  );
