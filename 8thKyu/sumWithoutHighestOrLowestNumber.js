function sumArray(array) {
    if (array===null || array===undefined || array.length <= 1) {
      return 0;
    }
    
    array.sort( (a,b) => a-b);
    array.shift();
    array.pop();
    
    return array.reduce( (a,b) => a+b,0);
  }