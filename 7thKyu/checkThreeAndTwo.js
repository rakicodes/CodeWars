function checkThreeAndTwo(array) {
    return ( array.filter(char => char==="a").length === 2 || array.filter(char => char==="b").length === 2 ||
           array.filter(char => char==="c").length === 2 ) && ( array.filter(char => char==="a").length === 3 ||
           array.filter(char => char==="b").length === 3 || array.filter(char => char==="c").length === 3 )
  }