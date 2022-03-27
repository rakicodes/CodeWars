function multipleOfIndex(array) {
    let multipleArr = [];
    for (let i=1; i<array.length; i++) {
      if (array[i] % i === 0) {
        multipleArr.push(array[i]);
      }
    }
    return multipleArr;
  }