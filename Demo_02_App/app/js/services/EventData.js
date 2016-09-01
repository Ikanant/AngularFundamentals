eventsApp.factory('eventData', function($resource, $timeout){

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
    getEvent: function(eventId) {
      console.log("==>" + eventId);
      var event = resource.get({id:eventId});
      var promise = $timeout(function(){
        event.name = event.name + " !!!";
      }, 1000);

      return event;
    },
    saveEvent: function(event) {
      event.id = 0;
      return resource.save(event);
    },
    getAllEvents: function(){
      return resource.query();
    }
  };
});
