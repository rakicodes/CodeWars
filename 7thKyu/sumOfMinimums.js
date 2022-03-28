function sumOfMinimums(arr) {
    let minVals = [];
    for (let array of arr) {
      minVals.push(Math.min(...array));
    }
    
    return minVals.reduce( (acc, c) => acc+c, 0);
  }