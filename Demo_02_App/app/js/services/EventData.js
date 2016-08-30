eventsApp.factory('eventData', function($resource){
  return {
    getTotalVoteCount: function(pageEvent){
      var total = 0;
      if(pageEvent.sessions != undefined){
        for (var i=0; i<pageEvent.sessions.length; i++){
          total += parseInt(pageEvent.sessions[i].upVoteCount);
        }
      }
      return total;
    },
    getEvent: function() {
      return $resource('/data/event/:id', {id:'@id'}).get({id:1});
    }
  };
});
