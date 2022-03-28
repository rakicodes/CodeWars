function checkExam(array1, array2) {
    let score = 0;
    array1.forEach( (ans, index) => {
      if (ans===array2[index]) {
        score += 4;
      } else if (array2[index]!=='') {
        score--;
      }
    })
    
    return score > 0 ? score : 0; 
  }