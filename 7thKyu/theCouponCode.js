function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode !== correctCode) {
      return false;
    }
    
    const currDateFormatted = new Date(currentDate);
    const exprDateFormatted = new Date(expirationDate);
    
    if (exprDateFormatted < currDateFormatted) {
      return false;
    }
    
    return true;
    
  }