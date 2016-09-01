'use strict';

// An empty array will tell Angular that we are not depending on any other module
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
  .config(function($routeProvider){
    $routeProvider.when('/newEvent',
      {
        templateUrl: 'templates/NewEvent.html',
        controller: 'EditEventController'
      });
    $routeProvider.when('/events',
      {
        templateUrl: 'templates/EventList.html',
        controller: 'EventListController'
      });
  });
