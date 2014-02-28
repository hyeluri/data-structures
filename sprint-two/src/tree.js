var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  newTree = extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var tempTree = makeTree(value);
  this.children.push(tempTree);
};

treeMethods.contains = function(target){
  var flag = false
  if(this.value === target){
    flag = true;
    return flag;
  } else {
    if(this.children.length > 0){
      for(var i=0; i<this.children.length; i++){
        var flag = this.children[i].contains(target);
        if(flag)
          return flag;
      } 
    } //else {
      //return;
    //}

  }
 return flag;
};

var extend = function(obj1, obj2){
  for(var key in obj2){
    obj1[key] = obj2[key];
  }

  return obj1;
}