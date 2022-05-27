function wordsToMarks(string){
    return string.split('')
                 .reduce((acc,c) => acc + (c.charCodeAt(0) - 96),0);
  }