function getNumberFromString(s) {
    return Number.parseInt(s.split("")
            .filter(x => !Number.isNaN(Number(x)) && x !== " ")
            .join(""));
  }