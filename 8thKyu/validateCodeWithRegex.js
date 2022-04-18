function validateCode (code) {
    let str = String(code);
    return Number(str[0]) === 1 || Number(str[0]) === 2 || Number(str[0]) === 3;
  }