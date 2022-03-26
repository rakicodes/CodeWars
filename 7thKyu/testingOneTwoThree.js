var number=function(array){
    let lineNum = [];
    
    for (let i=1; i<=array.length; i++) {
      lineNum.push(`${i}: ${array[i-1]}`)  
    }
    
    return lineNum;
  }