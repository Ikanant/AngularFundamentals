eventsApp.factory('eventData', function($resource){

  var resource = $resource('/data/event/:id', {id:'@id'});

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
      return resource.get({id:1});
    },
    saveEvent: function(event) {
      event.id = 999;
      return resource.save(event);
    }
  };
});
