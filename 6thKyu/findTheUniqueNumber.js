function findUniq(arr) {
    let set = new Set();
    for (let i=0; i<arr.length; i++) {
      if (set.has(arr[i])) {
        set.delete(arr[i]);
        if (set.size === 1) {
          return set.values().next().value;
        }
      }
      
      set.add(arr[i]);
    }
    
    return arr[arr.length-1];
  }