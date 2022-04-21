function decipherThis(str) {
    return str.split(" ").map(x => {
      const num = x.split("").filter(x => x.charCodeAt(0) > 46 && x.charCodeAt(0) < 58).join("");
      const letters = x.toLowerCase().split("").filter(x => x.charCodeAt(0) > 96 && x.charCodeAt(0) < 123);
      let temp = letters[0];
      letters[0] = letters[letters.length-1];
      letters[letters.length-1] = temp;
      return String.fromCharCode(num) + letters.join("");
    }).join(" ");
  }; 