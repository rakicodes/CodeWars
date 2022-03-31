function evenNumbers(array, number) {
    let lastEvens = [];
    
    let i = array.length-1;
    while (number > 0) {
      if (array[i] % 2 === 0) {
        lastEvens.unshift(array[i]);
        number--;
      }
      i--;
    }
    
    return lastEvens
  }