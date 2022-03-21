function find_average(array) {
    if (array.length===0) return 0;
    
    let avg = 0;
    for (let i=0; i<array.length; i++) {
      avg += array[i];
    }
    
    avg /= array.length;
    return avg;
  }