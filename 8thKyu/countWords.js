function countWords(str) {
    return str ? str.trim().split(/\s/gi).filter(x => x !== "").length : 0;
  }