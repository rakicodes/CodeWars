function vowel2index(str) {
    let vowels = 'aeiou';
    return str.split("").map( (char,i) => vowels.includes(char.toLowerCase()) ? i+1 : char).join("");
  }