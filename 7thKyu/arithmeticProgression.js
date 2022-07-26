function arithmeticSequenceElements(a,r,n) {
    let seq = [];
    
    for(let i = 0 ; i < n ; i++)
      seq.push(a + i*r);
      
    return seq.join(', ')
  }