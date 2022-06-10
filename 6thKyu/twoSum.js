function twoSum(numbers, target) {
    let map = new Map();
    for (let i=0; i<numbers.length; i++) {
      const complement = target - numbers[i];
      
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      
      map.set(numbers[i], i);
      
    }
    return[-1,-1];
  }