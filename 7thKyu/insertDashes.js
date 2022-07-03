function insertDash(num) {
    if (String(num).length===0 || String(num).length===1) return num;
    
    let arr = String(num).split("");
    for (let i=1; i<arr.length; i++) {
      if (Math.abs(arr[i])%2===1 && Math.abs(arr[i-1])%2===1) {
        arr[i] = `-${arr[i]}`;
      }
    }
    
    return arr.join("");
  }