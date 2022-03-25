const binaryArrayToNumber = arr => {
    arr.reverse();
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
      if (arr[i]===1) {
        sum += 2**i;
      }
      
    }
    
    return sum;
  };