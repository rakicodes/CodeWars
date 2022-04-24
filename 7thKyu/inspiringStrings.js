function longestWord(stringOfWords){
    const high = Math.max(...stringOfWords.split(" ").map(word => word.length));
    const arr = stringOfWords.split(" ").filter(word => word.length===high);
    return arr[arr.length-1];
  }