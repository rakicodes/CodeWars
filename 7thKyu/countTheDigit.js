function nbDig(n, d) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
      count += String(i * i).split('').filter(x => x == d).length;
    }
    return count;
  }