function flyBy(lamps, drone){
    return lamps.split("").map((elem,i) => drone[i] ? "o" : elem).join("");
  }