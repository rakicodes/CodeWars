function towerBuilder(nFloors) {
    if (nFloors === 1) {
      return ["*"];
    }
    let tower = [];
    let maxStars = 2*(nFloors)-1;
    for (let i=0; i<nFloors; i++) {
      let star = [];
      for (let j=0; j<(2*(i+1))-1; j++) {
        star.push("*");
      }
      while (star.length < maxStars) {
        star.unshift(" ");
        star.push(" ");
      }
      
      tower.push(star.join(""));
      
    }
    
    return tower;
  }