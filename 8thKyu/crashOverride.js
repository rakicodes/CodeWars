function aliasGen(fn, ln){
    if (fn.length===0) return 'Your name must start with a letter from A - Z.';
    
    const first = fn[0].toUpperCase();
    const last = ln[0].toUpperCase();
    return first in firstName && last in surname ? `${firstName[first]} ${surname[last]}` : 'Your name must start with a letter from A - Z.'
  }