function save(sizes, hd) {
    let count = 0;
    let total = 0;
    for (let i=0; i<sizes.length; i++) {
      if (total+sizes[i]>hd) {
        break;
      }
      total+=sizes[i];
      count++
  
    }
    
    return count;
  }