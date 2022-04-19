function abbreviate(string) {
    if (string.length < 4) return string;
    
    let arr = string.split(' ');
    arr = arr.map(word => word.includes('-') ?
                  word.split('-').map((x,i) => x.length < 4 ? x : x[0]+(x.length-2)+x[x.length-1]).join('-') : 
                  word);
    arr = arr.map(word => word.includes(',') ?
                  word.split(',').map((x,i) => x.length < 4 ? x : x[0]+(x.length-2)+x[x.length-1]).join(',') : 
                  word);
    
    let abbr = arr.map( (word,i) => (word.length < 4 || word.includes('-') || word.includes(',')) ? word : word[0]+(word.length-2)+word[word.length-1]);
    abbr = abbr.join(' ');
    
    return abbr;
    
  }