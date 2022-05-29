function isValidWalk(walk) {
    let dist = [0,0];
    for (let i=0; i<walk.length; i++) {
      if (walk[i]==='n') {
        dist[0]++;
      } else if (walk[i]==='s') {
        dist[0]--
      } else if (walk[i]==='e') {
        dist[1]++;
      } else if (walk[i]==='w') {
        dist[1]--;
      }
    }
    
    return walk.length===10 && dist[0]===0 && dist[1]===0;
  }