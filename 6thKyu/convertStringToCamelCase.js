function toCamelCase(str){
    let arr = []
    if (str.includes('_')) {
        arr = str.split('_');
    }
  
    if (str.includes('-')) {
      arr = str.split('-');
    }
    
    arr = arr.map( (word, i) => i===0 ? 
                        word[0] === word[0].toUpperCase() ? 
                        word : 
                        word[0].toLowerCase()+word.slice(1) :  
                        word[0].toUpperCase()+word.slice(1));
    
    return arr.join('');
  }