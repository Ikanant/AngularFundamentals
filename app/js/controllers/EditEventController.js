'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData) {
        $scope.saveEvent = function(event, newEventForm){
          if(newEventForm.$valid){
            eventData.saveEvent(event).$promise
              .then(function(){console.log('Success')})
              .catch(function(response) { console.log(response);});
          }
        };

        $scope.cancelEvent = function() {
          window.location = "/EventDetails.html";
        }
    }
  );
