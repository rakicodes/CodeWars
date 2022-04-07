function solve(arr){  
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let countArr = new Array(arr.length).fill(0);
    
    for (let i=0; i<arr.length; i++) {
      let word = arr[i].toLowerCase();
      for (let j=0; j<word.length; j++) {
        if (word[j]===alphabet[j]) {
          countArr[i] = countArr[i]+1;
        }
      }
    }
    
    return countArr;
  };