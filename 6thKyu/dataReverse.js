function dataReverse(data) {
    let res = [];
    while (data.length) {
      res.push(data.splice(0,8))
    }
    
    return res.reverse().flat();
  }