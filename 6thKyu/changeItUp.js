function changer(str) { 
    let vowels = "aeiou";
    str = str ? str.toLowerCase() : str;
    return str.split("")
              .map(char => !(char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123) ? char : 
                          char ==='z' ? 
                          'A' : 
                          vowels.includes(String.fromCharCode(char.charCodeAt(0)+1)) ?
                          String.fromCharCode(char.charCodeAt(0)+1).toUpperCase() :
                          String.fromCharCode(char.charCodeAt(0)+1).toLowerCase() )
              .join("")
           
  }