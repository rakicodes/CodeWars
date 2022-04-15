function lowercaseCount(str){
    return str.split("").filter(char => {
      let code = char.charCodeAt(0);
      if (code > 96 && code < 123) {
        return true;
      }
    }).length;
}