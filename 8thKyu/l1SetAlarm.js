function setAlarm(employed, vacation){
    return vacation || !employed ? false : true;
  }