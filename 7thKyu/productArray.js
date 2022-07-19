function productArray(numbers){
    let res = [];
    for (let i=0; i<numbers.length; i++) {
      let product = 1;
      for (let j=0; j<numbers.length; j++) {
        if (i!==j) {
          product *= numbers[j];
        }
      }
      res.push(product);
    }
    return res;
  }