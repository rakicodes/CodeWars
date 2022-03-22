function squareDigits(num){
    return Number(String(num).split("").map(digit => Number(digit)**2).join(""))
  }