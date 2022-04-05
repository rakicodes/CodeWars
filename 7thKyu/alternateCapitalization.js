function capitalize(s){
    let even = '';
    let odd = '';
    for (let i=0; i<s.length; i++) {
      if (i%2===0) {
        even += s[i].toUpperCase();
        odd += s[i];
      } else {
        even += s[i];
        odd += s[i].toUpperCase();
      }
    }
    return [even, odd];
}