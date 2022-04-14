function containAllRots(strng, arr) {
    const strArr = strng.split('');
    for (let i=0; i<strArr.length; i++) {
      strArr.unshift(strArr.pop());
      const rotation = strArr.slice().join("");
      if (!arr.includes(rotation)) {
        return false;
      };
  
    }
    
    return true;
  }

  