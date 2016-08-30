eventsApp.factory('eventData', function(){
  return {
    getTotalVoteCount: function(pageEvent){
      var total = 0;
      for (var i=0; i<pageEvent.sessions.length; i++){
        total += parseInt(pageEvent.sessions[i].upVoteCount);
      }
      return total;
    },
    event: {
        name: 'Angular Test',
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
                duration:3,
                level:'Advanced',
                abstract:'Cool class about React-Native',
                upVoteCount: 4
            },
            {
                name:'ASP.NET',
                creatorName:'Anibal Castineyra',
                duration:4,
                level:'Intermediate',
                abstract:'ASP.NET Core class',
                upVoteCount: 2
            },
            {
                name:'Golang',
                creatorName:'Jonathan Hernandez',
                duration:1,
                level:'Beginner',
                abstract:'Golang Basic class',
                upVoteCount: 3
            }
        ]
     }
  };
});
