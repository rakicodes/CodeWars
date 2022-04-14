String.prototype.camelCase=function(){
    return this.split(" ").map( (x,i) => x ? x[0].toUpperCase()+x.slice(1) : x).join("");
  }