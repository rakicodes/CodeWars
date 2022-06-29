function duplicates(array){
    let map = new Map();
    
    for (let num of array) {
      if (map.has(num)) {
        map.set(num, map.get(num)+1)
      } else {
        map.set(num, 1);
      }
    }
    
    let duplicates = 0;
    for (let [key,value] of map) {
      if (value >= 2) {
        duplicates += Math.floor(value/2);
      }
    }
    
    return duplicates;
  }