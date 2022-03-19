function sumMul(n,m){
    if (m<=0) {
      return "INVALID";
    }
    
    if (n==0) {
      return m;
    }
    
    if (m<n) {
      return 0;
    }
    
    let sum = 0;
    let multiple = 1;
    while (n*multiple < m) {
      sum += (n*multiple);
      multiple++;
    }
    
    return sum;
  }