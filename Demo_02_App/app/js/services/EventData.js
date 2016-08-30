eventsApp.factory('eventData', function($http){
  return {
    getTotalVoteCount: function(pageEvent){
      var total = 0;
      if(pageEvent != undefined){
        for (var i=0; i<pageEvent.sessions.length; i++){
          total += parseInt(pageEvent.sessions[i].upVoteCount);
        }
      }
      return total;
    },
    getEvent: function() {
      return $http({method: 'GET', url: '/data/event/1'});
    }
  };
});
