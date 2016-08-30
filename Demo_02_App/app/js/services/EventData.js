eventsApp.factory('eventData', function($http, $log){
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
    getEvent: function(successCallBack) {
      $http({method: 'GET', url: '/data/event/1'})
        .success(function(data, status, headers, config){
          successCallBack(data);
        })
        .error(function (data, status, headers, config){
          $log.warn(data, status, headers, config);
        });
    }
  };
});
