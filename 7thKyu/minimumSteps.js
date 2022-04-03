function minimumSteps(numbers, value){
    numbers.sort( (a,b) => a-b);
    
    if (numbers[0] > value) {
      return 0;
    }
    
    if (numbers[0]+numbers[1] > value) {
      return 1;
    }
    
    let counter = 1;
    let index = 2;
    let sum = numbers[0]+numbers[1];
    while (sum < value) {
      sum += numbers[index];
      index++;
      counter++;
    }
    
    return counter;
  }