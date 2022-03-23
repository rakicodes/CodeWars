function isIsogram(str){
    str = str.toLowerCase();
    for (let i=0; i<str.length; i++) {
      let rightStr;
      let leftStr;
      if (i===0) {
        rightStr = str.substring(1);
      } else if (i===str.length-1) {
        leftStr = str.substring(0, str.length-1);
      } else {
        rightStr = str.substring(0, i-1);
        leftStr = str.substring(i+1, str.length);
      }
      if ((rightStr && rightStr.includes(str[i])) || (leftStr && leftStr.includes(str[i]))) {
        return false;
      }
      
    }
    
    
    return true;
  }