function comp(array1, array2){
    if (array1) array1.sort((a,b) => a-b);
    if (array2) array2.sort((a,b) => a-b);
    return array1 && array2 ? array1.every((elem,i) => elem*elem === array2[i]) : false;
  }