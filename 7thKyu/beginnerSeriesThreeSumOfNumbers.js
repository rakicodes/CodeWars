function getSum( a,b ) {
    if (a===b) return a;
    
    let sum = 0;
    
    let temp = a;
    if (a > b) {
      a = b;
      b = temp;
    }
    
    for (let i=a; i<=b; i++) {
      sum+=i;
    }
    return sum;
  }