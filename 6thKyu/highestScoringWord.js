function high(x){
    const scores = x.split(" ").map(word => {
      return word.split("").reduce( (acc, c) => acc + c.charCodeAt(0)-96, 0)
    })
    
    const highestIndex = scores.indexOf(Math.max(...scores));
    
    return x.split(" ")[highestIndex];
  }