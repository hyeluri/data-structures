var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var newNode = makeNode(value);
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
    } else {
        list.tail.next = newNode;
        newNode.previous = list.tail;
        list.tail = newNode;

      }
  };
  list.removeTail= function(){
     var tempTail = list.tail;
     var tempTailValue = list.tail.value;
     list.tail = list.tail.previous;
     list.tail.next = null;
     delete tempTail;
     return tempTailValue;

  };

  list.addToHead = function(value){
    //turn value into node
    var newNode = makeNode(value);
    //check for current 
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
    }else{
      //find & create the "next" value - in current headnode
      newNode.next = list.head;
    //point "previous" value  of curent headnode to the newNode
      list.head.previous = newNode;
    //point head to new node
      list.head = newNode;
    }
  };

  list.removeHead = function(){
     var tempHead = list.head;
     var tempHeadValue = list.head.value;
     list.head = list.head.next;
     list.head.previous = null;
     delete tempHead;
     return tempHeadValue;
  };

  list.contains = function(target, node){
    for(var key in list){
      if(list[key].value === target)
        return true;
    }
    return false;
  };
  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
