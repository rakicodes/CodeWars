function strCount(str, letter){  
    return str.split("").filter(x => x === letter).length;
  }