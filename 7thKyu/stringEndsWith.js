function solution(str, ending){
    if (ending.length===0) return true;
    
    const index = ending.length*-1
    const strEnd = str.slice(index)
    return strEnd === ending;
  }