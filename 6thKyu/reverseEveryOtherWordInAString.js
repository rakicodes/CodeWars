function reverse(str){
    return str.split(" ")
              .filter(elem => elem !== "")
              .map((elem, i) => i%2!==0 ? elem.split("").reverse().join("") : elem)
              .join(" ")
  }