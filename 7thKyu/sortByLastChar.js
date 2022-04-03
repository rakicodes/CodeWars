function last(x){
    // convert the string to an array
    let arr = x.split(' ').sort( (a,b) => {
      // sort the string by its last letter or by order in array
      if (a[a.length-1]===b[b.length-1]) {
           return 1;
      } else {
        if (a[a.length-1] < b[b.length-1]) {
          return -1;
        } else {
          return 1;
        }
      }
    });
    
    return arr;
}