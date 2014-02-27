var makeQueue = function(){
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.newest = 0;
  instance.oldest = 0;
  
  return instance;
};

var queueMethods = {
  enqueue : function(value){
    this.storage[this.newest++] = value;
  },

  dequeue : function(){
    var item = this.storage[this.oldest];
    if(item != undefined){
      delete this.storage[this.oldest];
      this.oldest++;
      return item;
    }
  },

  size : function(){
    return this.newest - this.oldest;

  },
};