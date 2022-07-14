function bears(x, s){
    let arr = [];
    s = s.split("");
    while (s.length) {
      if (s.slice(0,2).join("")==="B8" || s.slice(0,2).join("")==="8B") {
        arr.push(s.splice(0,2).join(""));
      } else if (s.slice(1,3).join("")==="B8" || s.slice(1,3).join("")==="8B") {
        s.splice(0,1) // removing the first index bc the first and the second index aren't a match but the second and third index are a match
        arr.push(s.splice(0,2).join(""));
      } else {
        s.splice(0,2);
      }
      
      
    }
    return arr.length >= x ? [arr.join(""), true] : [arr.join(""), false]
  }