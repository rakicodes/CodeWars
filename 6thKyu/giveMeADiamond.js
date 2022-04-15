function diamond(n){
    if (n % 2 === 0 || n < 0) return null;
    
    let diam = "";
    let k = -1;
    for (let i=0; i<n; i++) {
      if (Math.ceil(n/2) <= i) {
        k--;
      } else {
        k++;
      }
      
      let stars = `*${"**".repeat(k)}`;
      let spaces = Math.ceil(n/2) + k;
      let padded = stars.padStart(spaces, " ");
      diam += padded + '\n';
      
    }
    return diam;
  }