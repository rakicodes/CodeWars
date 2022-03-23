function disemvowel(str) {
    let vowels = ['a','e','o','i','u'];
    return str.split("").filter(char => !vowels.includes(char.toLowerCase())).join("");
  }