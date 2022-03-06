function findMultiples(integer, limit) {
    let multiples = [];
    let i = 1;
    while (integer * i <= limit){
      multiples.push(integer * i);
      i++;
    }
    return multiples;
  }