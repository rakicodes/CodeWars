function mergeArrays(a, b) {
    let res = [];
    while (a.length && b.length) {
      res.push(a.shift());
      res.push(b.shift());
    }
    
    if (a.length) {
      res = res.concat(a);
    } else if (b.length) {
      res = res.concat(b);
    }
    
    return res;
  }