function queueTime(customers, n) {
    if (n===1) return customers.reduce((acc,c) => acc+c, 0);
    if (n>=customers.length) return Math.max(...customers);
    
    let totalTime = 0;
    let till = new Array(n).fill(0);
    
    while (customers.length) {
      for (let i=0; i<till.length; i++) {
        if (customers.length && till[i]===0) {
          till[i] = customers.shift();
        }
      }
      
      let min = Math.min(...till);
      till = till.map(t => t -= min);
      totalTime += min;
      
      
    }
    
    if (till.some(t => t!==0)) {
      totalTime += Math.max(...till);
    }
    
    return totalTime;
  }