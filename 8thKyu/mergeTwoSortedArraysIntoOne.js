function mergeArrays(arr1, arr2) {
    let filteredArr2 = arr2.filter(elem => !arr1.includes(elem));
    
    return arr1.concat(filteredArr2).sort((a,b) => a-b)
  }