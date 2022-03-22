function firstNonConsecutive (arr) {
    if (arr===null || arr.length<=1) {
      return null;
    }
    
    let prev = arr[0];
    for (let i=1; i<arr.length; i++) {
      if (prev !== arr[i]-1) {
        return arr[i];
      }
      prev = arr[i];
    }
    
    return null;
  }