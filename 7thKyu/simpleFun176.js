function reverseLetter(str) {
    return str.split("")
              .filter(char => char.toLowerCase().charCodeAt(0)>96 &&  char.toLowerCase().charCodeAt(0)<123)
              .reverse()
              .join("");
  }