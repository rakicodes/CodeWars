function duplicateCount(text){
    let count = {};
    for (let i=0; i<text.length; i++) {
      let char = text[i].toLowerCase();
      
      if (char in count) {
        count[char] = count[char]+1;
      } else {
        count[char] = 0;
      }
    }
  
    let countOfDupes = 0
    for (let val in count) {
      if (count[val] !== 0) {
        countOfDupes++;
      }
    }
    
    return countOfDupes;
  
  }