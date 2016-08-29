'use strict';

eventsApp.filter('durations', function(){
  return function (duration){
    return duration+":00 hrs";
  }
});
