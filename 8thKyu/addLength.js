function addLength(str) {
    let arr = str.split(" ");
    return arr.map(elem => `${elem} ${elem.length}`);
  }