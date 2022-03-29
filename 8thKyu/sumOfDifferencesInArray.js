function sumOfDifferences(arr) {
    if (arr.length <= 1) return 0;
    
    arr.sort( (a,b) => b-a );
    let sum = 0;
    for (let i=0; i<arr.length-1; i++) {
      let next = arr[i+1];
      sum += ( arr[i] - next )
    }
    
    return sum;
    
  }