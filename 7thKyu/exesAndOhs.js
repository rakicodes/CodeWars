function XO(str) {
    let xCount = 0;
    let oCount = 0;
    
    for (let char of str) {
      if (char.toLowerCase()==='x') {
        xCount++;
      } else if (char.toLowerCase()==='o') {
        oCount++;
      } 
    }
    
    return xCount === oCount;
  }