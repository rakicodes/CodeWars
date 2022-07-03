function evenLast(numbers) {
    return numbers.length>0 ? numbers.filter((num,i) => i%2===0).reduce((acc,c) => acc+c, 0) * numbers[numbers.length-1]: 0;
  }