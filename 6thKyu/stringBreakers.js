function stringBreakers(n, string){
    let arr = string.split(" ").join("").split("");
    let parts = [];
    while (arr.length) {
      parts.push(arr.splice(0,n).join(""));
    }
    
    return parts.join("\n");
  }