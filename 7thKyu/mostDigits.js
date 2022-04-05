function findLongest(array){
    let longest = String(array[0]);
    for (let i=1; i<array.length; i++) {
      if (longest.length < String(array[i]).length) {
        longest = String(array[i]);
      }
    }
    return Number(longest);
  }