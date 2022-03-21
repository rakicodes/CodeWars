function countSheeps(arrayOfSheep) {
    let count = 0;
    arrayOfSheep.forEach(sheep => {sheep===true && count++})
    return count;
  }