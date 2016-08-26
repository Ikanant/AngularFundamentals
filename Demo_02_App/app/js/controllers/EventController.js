'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.event = {
            name: 'Jonathan Hernandez\'s Event',
            date: '01/01/1992',
            time: '10:30 am',
            location: {
                address: '1234 NW 56 Ave',
                city: 'Miami',
                state: 'FL'
            },
            imageUrl: 'img/angularjs-logo.png'
        }
    }
);