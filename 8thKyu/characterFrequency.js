function charFreq(message) {
    let arr = message.split("").sort();
    let obj = {}
    for (let i=0; i<arr.length; i++) {
      let key = arr[i];
      if (key in obj) {
        obj[key]  = obj[key]+1;
      } else {
        obj[key]  = 1;
      }
    }
    
    return obj;
  }