function minSum(arr) {
    let sum = 0;
    arr.sort( (a,b) => a-b);
    for (let i=0; i < arr.length / 2; i++) {
      sum += arr[i]*arr[arr.length-i-1]
    }
    return sum;
  }