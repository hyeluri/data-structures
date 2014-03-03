var makeBinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right= null;
  newTree = extend(newTree, binaryTreeMethods);
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value){

  if(this.value < value){
    if(this.right === null){
      this.right = makeBinarySearchTree(value);
    }
    else{
      this.right.insert(value);
    }
  } else if(this.value > value){
      if(this.left === null){
        this.left = makeBinarySearchTree(value);
      }
      else{
        this.left.insert(value);
      }
  };
};

binaryTreeMethods.contains = function(value){
  
  if(this.value === null || this.value === undefined){
    return false; 
  }
  else if(this.value === value){
    return true;
  }
  else if(this.value < value){
    if(this.right !== null){
      return this.right.contains(value);
    }else{
      return false;
    }
  }else if(this.value > value){
    if(this.left !== null){
      return this.left.contains(value);
    }else{
      return false;
    }
  }
};

binaryTreeMethods.depthFirstLog = function(callback){
  //
    if(this.value === null || this.value === undefined){
      return; 
    }
    callback(this.value);
    if(this.left){
      this.left.depthFirstLog(callback);
    }
    if(this.right){
      this.right.depthFirstLog(callback);
    }
};















