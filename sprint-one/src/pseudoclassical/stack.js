var Stack = function() {
  this.sizeObj = 0;
  this.storage = {};
};


  Stack.prototype.push = function(value){
    this.storage[this.sizeObj++] = value;
  };

  Stack.prototype.pop = function(){
    var item;
    item = this.storage[this.sizeObj-1]
    
    if(item != undefined){
      delete this.storage[this.sizeObj-1];
      this.sizeObj--;
    }

    return item;
  };

  Stack.prototype.size = function(){
    return this.sizeObj;
  };

var newStack = new Stack();
