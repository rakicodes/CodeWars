function rowSumOddNumbers(n) {
    let sum = 0;
    let odd = 1;
    for (let i=1; i<=n; i++) {
      sum = 0;
      for (let j=1; j<=i; j++) {
        sum += odd;
        odd += 2;
      }
      console.log(`${sum}\n\n`)
      
    }
    return sum;
  }