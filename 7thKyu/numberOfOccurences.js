Array.prototype.numberOfOccurrences = function(num) {
    return this.filter(elem => elem===num).length;
  }