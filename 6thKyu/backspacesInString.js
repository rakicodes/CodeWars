function cleanString(s) {
    let i = 0;
    while (s.includes("#")) {
      if (s[i] === '#') {
        s = s.substring(0,i-1) + s.substring(i+1);
        i--;
      } else {
        i++;
      }
      
    }
    return s;
  }

