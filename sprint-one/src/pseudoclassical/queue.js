var Queue = function(){

  this.storage = {};
  this.newest = 0;
  this.oldest = 0;
  
};


  Queue.prototype.enqueue = function(value){
    this.storage[this.newest++] = value;
  };

  Queue.prototype.dequeue = function(){
    var item = this.storage[this.oldest];
    if(item != undefined){
      delete this.storage[this.oldest];
      this.oldest++;
      return item;
    }
  };

  Queue.prototype.size = function(){
    return this.newest - this.oldest;

  };

var newQueue = new Queue();