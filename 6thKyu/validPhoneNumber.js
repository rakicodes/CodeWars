function validPhoneNumber(phoneNumber){
    if (phoneNumber[0] !== "(" || phoneNumber[4] !== ")" ||
        phoneNumber[5] !== " " || phoneNumber[9] !== "-" ||
        phoneNumber.length !== 14) {
      return false;
    }
    
    for (let i=0; i<phoneNumber.length; i++) {
      if ( ( (i>0 && i<4)  || (i>5 && i<9) || i>9 ) && 
          ( !Number.isInteger(Number(phoneNumber[i])) || !(Number(phoneNumber[i])>=0) || !(Number(phoneNumber[i])<=9) )) {
        return false;
      }
      
      
    }
    
    return true;
  }