function DNAStrand(dna){
    let arr = dna.split("");
    for (let i=0; i<arr.length; i++) {
      if (arr[i] === 'A') {
        arr.splice(i, 1, 'T');
      } else if (arr[i] === 'T') {
        arr.splice(i, 1, 'A'); 
      } else if (arr[i] === 'C') {
        arr.splice(i, 1, 'G');
      } else if (arr[i] === 'G') {
        arr.splice(i, 1, 'C');
      }
    }
    
    return arr.join('');
  }