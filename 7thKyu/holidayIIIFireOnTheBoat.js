function fireFight(s){
    return s.split(" ").map(item => item.toLowerCase()==="fire" ? "~~" : item).join(" ");
  }