function digitize(n) {
    if (n===0) return [0];
    
    let reversedArrayDigits = [];
    while (n>0) {
      let remainder = n % 10;
      n = Math.floor(n / 10);
      reversedArrayDigits.push(remainder);
    } 
    
  
    return reversedArrayDigits;
  }