function array(arr){
    let str = arr.split(",").slice(1,-1).join(" ");
    return str || null;
  
  }