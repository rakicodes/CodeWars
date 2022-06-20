function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
    
      for (let i=0; i<strarr.length-k+1; i++) {
        for (let j=i+1; j<i+k; j++) {
          strarr[i] += strarr[j]
        }
        
      }
    
    let maxCon = Math.max(...strarr.map(elem => elem.length));
    return strarr.filter(elem => elem.length === maxCon)[0];
  }