var min = function(list){
    let minVal = Infinity;
    for (let val of list) {
      if (minVal>val) {
        minVal = val;
      }
    }
    return minVal;
}

var max = function(list){
    let maxVal = -Infinity;
    for (let val of list) {
      if (maxVal<val) {
        maxVal = val;
      }
    }
    return maxVal;
}