var HashTable = function(){
  this._limit = 8;
  this._used = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);  
  var resultArray= [k, v];
  this._storage.set(i, resultArray);
  this._used++;


  this.resizeLimit();
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  var result = this._storage.get(i);
  //console.log("retrieve key",i, "value: ", result);
  if(result !== null && result !== undefined){
    return result[1];
  }else
    return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
  this.resizeLimit();
  this._used--;

};

HashTable.prototype.resizeLimit = function(){
  var ratio = this._used/ this._limit;
  var changedFlag = false;

  if(ratio > .75){
    this._limit = this._limit * 2;
    changedFlag = true;
  }else if(ratio < .25){
    this._limit = this._limit/2
    changedFlag = true;
  };

   if(changedFlag === true){
     this._tempStorage = makeLimitedArray(this._limit);
     var that = this;
     
     that._storage.each(function(value, k, collection){
   //  console.log(that._storage.get(3));
      if(value!=undefined && value != null){
        var i = getIndexBelowMaxForKey(value[0], that._limit);
       // console.log("each key ", i, "each value", value);
        that._tempStorage.set(i,value);
      }
    });

     this._storage = this._tempStorage;
   }

};