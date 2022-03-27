function warnTheSheep(queue) {
    let sheepToWarn;
    queue.forEach( (animal, index) => {
      if (animal==="wolf" ) {
        sheepToWarn = queue.length-index-1;
      }
    })
    
    return sheepToWarn > 0 ? `Oi! Sheep number ${sheepToWarn}! You are about to be eaten by a wolf!` : "Pls go away and stop eating my sheep"
  }