var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};
  instance.sizeObj = 0;
  instance.storage = {};

  return _.extend(instance, stackMethods);
  
};

var stackMethods = {

  push:function(value){
    this.storage[this.sizeObj++] = value;
  },

  pop:function(){
    var item;
    item = this.storage[this.sizeObj-1]
    
    if(item != undefined){
      delete this.storage[this.sizeObj-1];
      this.sizeObj--;
    }

    return item;
  },

  size:function(){
    return this.sizeObj;
  }

};
