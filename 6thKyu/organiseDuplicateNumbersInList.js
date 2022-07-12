function group(arr) {
  
    let map = new Map();
    for (let i=0; i<arr.length; i++) {
      if (map.has(arr[i])) {
        map.set(arr[i], map.get(arr[i])+1);
      } else {
        map.set(arr[i], 1);
      }
    }
    
    let res = [];
    for (let [key,value] of map) {
      let arr = [];
      for (let i=0; i<value; i++) {
       arr.push(key);
      }
      res.push(arr);
    }
    
    return res;
  }