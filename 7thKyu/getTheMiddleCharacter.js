function getMiddle(s) {
    let middleIndex = Math.floor(s.length / 2) - 1;
    let middle;
    if (s.length % 2 === 0) {
      middle = s.substring(middleIndex, middleIndex+2);
    } else {
      middle = s.charAt(middleIndex+1);
    }
    
    return middle;
  }