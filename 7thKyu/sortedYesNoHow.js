function isSortedAndHow(array) {
    let asc = false;
    let desc = false;
    
    for (let i=0; i<array.length-1; i++) {
      let next = array[i+1];
      
      if (next > array[i]) {
        asc = true;
      } else if (next < array[i]) {
        desc = true;
      }
      
    }
    
    if (asc && !desc) {
      return 'yes, ascending';
    } else if (desc && !asc) {
      return 'yes, descending';  
    } else {
      return 'no'; 
    }
    
  
  }