function mean(town, strng) {
    let rainfall = getRainFall(town, strng);
    return rainfall === -1 ? -1 : rainfall.reduce( (acc,c) => acc+c, 0) / rainfall.length;
  }
  function variance(town, strng) {
    const avg = mean(town, strng);
    const rainfall = getRainFall(town, strng);
    return rainfall === -1 ? -1 : rainfall.map(x => (x-avg)*(x-avg)).reduce( (acc,c) => acc+c, 0) / rainfall.length;
    
  }
    
  function getRainFall(town, strng) {
    let rainfall = strng.split("\n").filter(x => town === x.split(':')[0]);
  
    if (rainfall.length === 0) {
      return -1;
    }                      
    return rainfall.join("")
                    .split(":")[1]
                    .split(",")
                    .map(x => +x.split(" ")[1]);
  }