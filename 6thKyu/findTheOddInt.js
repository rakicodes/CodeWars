function findOdd(A) {
    let count = {};
    
    for (let i=0; i<A.length; i++) {
      if (A[i] in count) {
        count[A[i]]++;
      } else {
        count[A[i]] = 1;
      }
    }
    
    for (let key in count) {
      if (count[key] % 2 === 1) {
        return Number(key);
      }
    }
    
    return false;
  }