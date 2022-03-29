function adjacentElementsProduct(array) {
    let maxPro = -Infinity;
    for (let i=0; i<array.length-1; i++) {
      let next = array[i+1];
      maxPro = Math.max(maxPro, array[i]*next);
    }
    
    return maxPro;
  }