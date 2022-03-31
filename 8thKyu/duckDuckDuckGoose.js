function duckDuckGoose(players, goose) {
    let name;
    let i=0;
    while (goose >= 1) {
      if (i > players.length-1) {
        i=0;
      }
      name = players[i].name;
      goose--;
      i++;
    }
    
    return name;
  }