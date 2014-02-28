var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
  
    var newNode = makeNode(value);
    if(list.head === null){
      list.head = newNode;
      list.tail = list.head;

    } else{
        
        if(list.tail == list.head){
          delete list.tail;
          list.tail = newNode; 
          list.head.next = list.tail.value;
        }

        var oldTailValue = list.tail.value;
        list[oldTailValue] = list.tail;
        list.tail = newNode;
        list[oldTailValue].next = list.tail.value;
      } 

  };

  list.removeHead = function(){
    var tempHead = list.head.next;
    var removedHead = list.head.value;

    list.head = list[tempHead];

    delete list[tempHead];
    return removedHead;
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
