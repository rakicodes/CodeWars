function solve(arr){
    arr.sort((a,b) => a-b)
    
    let res = []
    while (arr.length) {
      if (arr.length===1) {
        res.push(arr.pop());
      } else {
        res.push(arr.pop());
        res.push(arr.shift());
      }  
    }
    
    return res;
    
  };