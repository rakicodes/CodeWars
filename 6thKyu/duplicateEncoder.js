function duplicateEncode(word){
    word = word.toLowerCase();
    let alphaCounter = {};
    
    for (let i=0; i<word.length; i++) {
      if (word[i] in alphaCounter) {
        alphaCounter[word[i]]++;
      } else {
        alphaCounter[word[i]] = 1;
      }
    }
    
    let brackets = "";
    for (let i=0; i<word.length; i++) {
      if (alphaCounter[word[i]] === 1) {
        brackets += "(";
      } else {
        brackets += ")"
      }
    }
    
    return brackets;
  }
  