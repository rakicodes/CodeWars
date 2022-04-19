function dashatize(num) {
    if (typeof num !== 'number') return null;
    if (Number.isNaN(num)) return 'NaN';
    
    num = String(num).split('-');
    num = num[num.length-1];
    let str = [];
    let even = '';
    for (let i=0; i<num.length; i++) {    
      if (num[i] % 2 === 1) {
        if (even !== '') {
          str.push(even);
        } 
        even = '';
        str.push(num[i]);
        
      } else if (num[i] % 2 === 0) {
        even += num[i];
      }
    }
    
    if (even !== '') {
      str.push(even);
    }
    
    return str.join('-');
    
  }