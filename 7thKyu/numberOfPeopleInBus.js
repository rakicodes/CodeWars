var number = function(busStops){
    let num = 0;
    for (let [enter, exit] of busStops) {
      num+=enter;
      num-=exit;
    }
    
    return num;
  }