function sevenAte9(str){
    for (let i=1; i<str.length-1; i++) {
      if (str[i]==='9' && str[i-1]==='7' && str[i+1]==='7') {
        str = str.substring(0,i) + str.substring(i+1);
      }
    }
    
    return str;
  }