var makeTree = function(value, parent){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  if(parent !== undefined){
    newTree.parent = parent;
  }else{
    newTree.parent = null;
  }

  newTree = extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var tempTree = makeTree(value, this);
  this.children.push(tempTree);
};

treeMethods.removeFromParent = function(){  
  //find parent node
  var parentNode = this.parent;
  var indexOfChild;

  if(parentNode !== null){
    //find index of child in the parent
    for (var i = 0; i < parentNode.children.length; i++) {
      if(parentNode.children[i] === this){
        indexOfChild = i;
      }
    }
    //remove child from parent's children array
    var newTree =  parentNode.children.splice(indexOfChild, 1);
    //remove parent from child
      this.parent = null;
   }
};

treeMethods.contains = function(target){
  var flag = false
  if(this.value === target){
    flag = true;
    return flag;
  } else {
    if(this.children.length > 0){
      for(var i=0; i<this.children.length; i++){
        flag = this.children[i].contains(target);
        if(flag)
          return flag;
      } 
    } 
  }
 return flag;
};

treeMethods.traverse = function(callback){
  if(this.value){
    callback(this.value);
  }
  if(this.children.length > 0){
    for(var i=0; i<this.children.length; i++){
      this.children[i].traverse(callback);
    }
  }

};

var extend = function(obj1, obj2){
  for(var key in obj2){
    obj1[key] = obj2[key];
  }
  return obj1;
}










