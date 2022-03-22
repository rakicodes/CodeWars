function getCount(str) {
    let vowelsCount = 0;
    let vowels = "aeiou";
    
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelsCount++;
      }
    }
    
    
    return vowelsCount;
  }