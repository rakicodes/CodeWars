function arr2bin(arr){
    let numArr = arr.filter(elem => typeof elem === 'number');
    if (numArr.includes(NaN)) {
      return 'NaN';
    }
    
    let sum = numArr.reduce( (acc,c) => acc+c, 0);
    return sum.toString(2);
  }