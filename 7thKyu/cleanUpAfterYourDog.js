function crap(x, bags, cap){
    let count = 0;
    let isDog = false;
    
    x.forEach(space => {
      space.forEach(elem => {
        if (elem==='@') {
        count++;
        } else if (elem==='D') {
          isDog = true;
        }
      })
    })
    
    return isDog ? "Dog!!" : bags*cap >= count ? "Clean" : "Cr@p"
  }