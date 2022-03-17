function powersOfTwo(n){
    let powerArr = [];
    for (let i=0; i<n+1; i++) {
      powerArr.push(2**i);
    }
    
    return powerArr;
  }