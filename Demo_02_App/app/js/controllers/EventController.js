'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.event = {
            name: 'Miami\'s Programming Meet\'s Event',
            date: '01/01/1992',
            time: '10:30 am',
            location: {
                address: '1234 NW 56 Ave',
                city: 'Miami',
                state: 'FL'
            },
            imageUrl: 'img/angularjs-logo.png',
            sessions: [
                {
                    name:'React-Native',
                    creatorName:'Horacio Delgado',
                    duration:'3:00 Hours',
                    level:'Advanced',
                    abstract:'Cool class about React-Native'
                },
                {
                    name:'ASP.NET',
                    creatorName:'Anibal Castineyra',
                    duration:'4:00 Hours',
                    level:'Intermediate',
                    abstract:'ASP.NET Core class'
                },
                {
                    name:'Golang',
                    creatorName:'Jonathan Hernandez',
                    duration:'2:00 Hours',
                    level:'Beginner',
                    abstract:'Golang Basic class'
                }
            ]
        }
    }
);