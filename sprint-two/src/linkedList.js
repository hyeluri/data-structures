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
        list.tail = newNode;
      } 
  };

  list.removeHead = function(){
     var tempHead = list.head;
     var tempHeadValue = list.head.value;
     list.head = list.head.next;
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

  return node;
};
