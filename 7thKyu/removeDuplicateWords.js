function removeDuplicateWords (s) {
    let set = new Set();
    
    let arr = s.split(' ');
    for (let word of arr) {
      set.add(word);
    }
    
    let uniqueWords = [];
    for (let word of set) {
      uniqueWords.push(word);
    }
    
    return uniqueWords.join(' ');
  }