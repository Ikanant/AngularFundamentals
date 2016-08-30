eventsApp.factory('calculator', function(){
  return {
    addStrings: function(a, b){
      return a+b;
    },
    reverse: function(a, b){
      return b+a;
    }
  }
});
