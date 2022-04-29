function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    sharkSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed;
    
    const youTime = pontoonDistance / youSpeed;
    const sharkTime = sharkDistance / sharkSpeed;
    
    return youTime < sharkTime ? "Alive!" : "Shark Bait!";
  }