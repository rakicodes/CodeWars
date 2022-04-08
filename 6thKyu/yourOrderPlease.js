function order(words){
    words = words.split(" ");
    let sorted = new Array(words.length).fill('');
    
    console.log(words)
    for (let i=0; i<words.length; i++) {
      for (let j=0; j<words[i].length; j++) {
        if (!Number.isNaN(+words[i][j])) {
            sorted[words[i][j]-1] = words[i];
        }
      }  
    }
    
    return sorted.join(' ');
  }