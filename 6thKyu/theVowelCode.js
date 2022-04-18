function encode(string) {
    let key = 'aeiou';
    return string.split("").map(x => key.includes(x) ? key.indexOf(x)+1 : x).join("");
  }
  
  function decode(string) {
    let key = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u'
    };
    return string.split("").map(x => x in key ? key[x] : x).join("");
  }