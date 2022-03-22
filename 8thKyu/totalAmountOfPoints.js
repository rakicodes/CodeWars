function points(games) {
    let points = 0;
    for (let game of games) {
      let home = parseInt(game[0]);
      let away = parseInt(game[game.length-1]);
      
      if (home > away) {
        points += 3;
      } else if (home === away) {
        points += 1;
      }
      
    }
    
    return points;
  }