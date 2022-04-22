function longestRepetition(s) {
  
    let currMax = 0;
    let currChar = "";
    let char = "";
    let max = 0;
    for (let i=0; i<s.length; i++) {
      if (currChar !== s[i]) {
        currMax = 0;
        currChar = s[i];
      }
      
      currMax++;
      
      if (currMax > max) {
        max = currMax;
        char = currChar;
      }
      
    }
    
    
    return [char, max];
    
  }