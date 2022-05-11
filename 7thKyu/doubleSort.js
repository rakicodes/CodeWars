function dbSort(a){
    const str = a.filter(x => typeof x === 'string').sort();
    const num = a.filter(x => typeof x === 'number').sort((b,c) => b-c);
    
    return num.concat(str);
    
  }