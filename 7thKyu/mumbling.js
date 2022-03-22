function accum(s) {
    let strToArr = s.split("");
    
    for (let i=0; i<strToArr.length; i++) {
      let str = strToArr[i].toUpperCase();;
      for (let j=0; j<i; j++) {
        str += strToArr[i].toLowerCase();
      } 
      strToArr[i] = str;
    }
    
    return strToArr.join("-");
    
  }