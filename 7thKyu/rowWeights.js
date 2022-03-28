function rowWeights(array){
    let team1 = [];
    let team2 = [];
    for (let i=0; i<array.length; i++) {
      if (i % 2 === 0) {
        team1.push(array[i]);
      } else {
        team2.push(array[i]);
      }
    }
    
    let totalWeight = [];
    totalWeight.push(team1.reduce( (acc,c) => acc+c, 0));
    totalWeight.push(team2.reduce( (acc,c) => acc+c, 0));
    
    return totalWeight;
    
  }