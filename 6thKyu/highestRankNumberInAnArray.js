function highestRank(arr){
    let counter = new Map();
    for (let i=0; i<arr.length; i++) {
      if (counter.get(arr[i])) {
        counter.set(arr[i], counter.get(arr[i])+1)
      } else {
        counter.set(arr[i], 1)
      }
    }
    
    let highest = 0;
    let highestVal = 0;
    for (let [key, value] of counter) {
      if (highest < value) {
        highest = value;
        highestVal = key;
      } else if (highest === value) {
        highestVal = highestVal > value ? highestVal : value;
      }
    }
    
    return highestVal;
  }