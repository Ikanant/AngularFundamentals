'use strict';

eventsApp.filter('durations', function(){
  return function (duration){
    console.log(duration[0].duration + ":00 hours");
    return duration[0].duration + ":00 hours";
  }
});
