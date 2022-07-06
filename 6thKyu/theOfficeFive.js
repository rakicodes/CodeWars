function meeting(x, need){
    if (need===0) return 'Game On';
    
    let chairs = 0;
    let res = []
    for (let room of x) {
      const occupiedChairs = room[0].length;
      const amountOfChairs = room[1];
      
      if (occupiedChairs < amountOfChairs) {
        let freeChairs = amountOfChairs-occupiedChairs;
        
        if (chairs+freeChairs > need) {
          freeChairs = need - chairs;
        }
        
        res.push(freeChairs);
        chairs+=freeChairs; 
      } else {
        res.push(0);
      }
      
      if (chairs===need) {
        break;
      }
      
    }
    
    return chairs === need ? res : 'Not enough!'
  }