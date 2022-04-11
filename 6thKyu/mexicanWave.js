function wave(str){
    let arr = [];
    for (let i=0; i<str.length; i++) {
      if (str[i]!==' ' && i==0) {
        let word = str.slice(i,i+1).toUpperCase() + str.slice(i+1);
        arr.push(word);
      } else if (str[i]!==' ') {
        let word = str.slice(0,i) + str.slice(i,i+1).toUpperCase() + str.slice(i+1);
        arr.push(word);
      }
    }
    
    return arr;
  }