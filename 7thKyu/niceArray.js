function isNice(arr){
    return arr.length>0 ? arr.every(elem => arr.includes(elem+1) || arr.includes(elem-1)) : false;
  }