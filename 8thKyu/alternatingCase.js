String.prototype.toAlternatingCase = function () {
    let alternating = "";
    
    for (let char of this) {
      if (char === char.toLowerCase()) {
        alternating += char.toUpperCase();
      } else if (char === char.toUpperCase()) {
        alternating += char.toLowerCase();
      }
    }
    
    return alternating;
  }