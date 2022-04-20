var splitInParts = function(s, partLength){
    let parts = [];
    let str = "";
    for (let i=0; i<s.length; i++) {
      if ( i % partLength === 0) {
        parts.push(str);
        str = s[i];
      } else {
        str += s[i];
      }
    }
    
    parts.push(str);
    return parts.join(" ").trim();
    
  }

