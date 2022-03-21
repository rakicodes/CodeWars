function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    let combinedArr = arr1.concat(arr2);
    
    combinedArr.forEach(val => sum+=val);
    
    
    return sum;
  }