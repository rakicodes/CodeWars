function gordon(a){
    let vowels = "AEIOU"
    return a
      .split(" ")
      .map(word => {
        word = word.toUpperCase();
        word = word.split("").map(letter => {
          if (letter==="A") {
            letter = "@";
          } else if (vowels.includes(letter)) {
            letter = "*"
          }
          return letter;
        }).join("")
        return word+"!!!!"
      })
      .join(" ")
  }