function solution(string) {
    let arr = [];
    let word = ""
    for (let i=0; i<string.length; i++) {
      if (string[i]===string[i].toUpperCase()) {
        arr.push(word);
        word = "";
      }
      word += string[i];
    }
  
    arr.push(word);
    return arr.join(" ");
}