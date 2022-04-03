function removeSmallest(numbers) {
    let minNum = Math.min(...numbers);
    let minIndex = numbers.indexOf(minNum);
    let numbersCopy = numbers.slice();
    numbersCopy.splice(minIndex,1);
    return numbersCopy;
  }