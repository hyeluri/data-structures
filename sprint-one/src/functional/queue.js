var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var newest = 0;
  var oldest = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[newest++] = value;
  };

  instance.dequeue = function(){
    var item = storage[oldest];
    if(item != undefined){
      delete storage[oldest];
      oldest++;
      return item;
    }
  };

  instance.size = function(){
    return newest - oldest;

  };

  return instance;
};
