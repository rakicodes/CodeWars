function highAndLow(numbers){
    let arr = numbers.split(" ");
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
    
    return `${maxNum} ${minNum}`
  }