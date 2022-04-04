function validatePIN (pin) {
    if (pin.length===4 || pin.length===6) {
      return pin.split('').filter(x => Number.isNaN(Number.parseInt(x))).length === 0
    }
    
    return false;
  }