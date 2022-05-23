function mxdiflg(a1, a2) {
  
    if (a1.length===0 || a2.length===0) return -1;
    
    const a1Len = a1.map(x=>x.length);
    const a2Len = a2.map(x=>x.length);
    
    const a1Max = Math.max(...a1Len);
    const a1Min = Math.min(...a1Len);
    
    const a2Max = Math.max(...a2Len);
    const a2Min = Math.min(...a2Len);
    
    
    return Math.max(a1Max-a2Min, a2Max-a1Min);
  }