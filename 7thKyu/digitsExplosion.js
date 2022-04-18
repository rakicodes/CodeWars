function explode(s) {
    return s.split('').map(num => num.repeat(Number(num))).join('');
  }