function bingo(a) {
    return ["b","i","n","g","o"].every(elem => a.includes(elem.charCodeAt(0)-96)) ? "WIN" : "LOSE"
  }