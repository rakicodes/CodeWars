function multiTable(n) {
    let table = '';
    for (let i=1; i<=10; i++) {
      table += `${i} * ${n} = ${i*n}`
      
      if (i < 10) {
        table += '\n'
      }
    }
    
    return table;
  }