function broken(x){
    return x.split("").map(x => +x ? 0 : 1).join("");
  }