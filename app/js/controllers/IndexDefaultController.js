'use strict'

eventsApp.controller('IndexDefaultController',
  function($scope, $location){
    $scope.createEvent = function(){
      $location.replace();
      $location.url('newEvent');
    }
    $scope.eventDetails = function(){
      $location.replace();
      $location.url('eventDetails');
    }
    $scope.editprofile = function(){
      $location.replace();
      $location.url('editProfile');
    }
  }
);
