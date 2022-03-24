function findShort(s){
    let arr = s.split(" ");
    let shortest = arr[0].length;
    
    for (let i=1; i<arr.length; i++) {
      if (shortest > arr[i].length) {
        shortest = arr[i].length;
      }
    }
    
    return shortest;
  }