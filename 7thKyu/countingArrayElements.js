function count(array){
    let nameCounter = {};
    for (let elem of array) {
      if (elem in nameCounter) {
        nameCounter[elem] = nameCounter[elem]+1;
      } else {
        nameCounter[elem] = 1;
      }
    }
    return nameCounter;
  }