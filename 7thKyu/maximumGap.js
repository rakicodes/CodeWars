function maxGap (numbers){
    numbers.sort( (a,b) => a-b);
    
    let maxDiff = -Infinity;
    for (let i=0; i < numbers.length - 1; i++) {
      let diff = numbers[i+1] - numbers[i];
      maxDiff = Math.max(maxDiff, diff);
    }
    
    return maxDiff;
  }