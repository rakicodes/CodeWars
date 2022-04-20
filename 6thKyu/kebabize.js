function kebabize(str) {
    let kebab = [];
    let word = "";
    for (let i=0; i<str.length; i++) {
      if (str[i].toUpperCase() === str[i] && str.toLowerCase().charCodeAt(i) > 96 && str.toLowerCase().charCodeAt(i) < 123) {
        if (word) {
          kebab.push(word);
        }
        word = str[i].toLowerCase();
      } else if (str.toLowerCase().charCodeAt(i) > 96 && str.toLowerCase().charCodeAt(i) < 123){
        word += str[i];
      }
    }
    kebab.push(word);
    return kebab.join("-");
  }