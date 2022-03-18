function smash (words) {
    if (words[0]==='') {
      words.unshift();
    }
    
    if (words[-1]==='') {
      words.pop();
    }
    
    return words.join(' ');
  };