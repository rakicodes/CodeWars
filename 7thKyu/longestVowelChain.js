function solve(s){
    let vowels = "aeiou";
    let maxVowels = 0;
    let currVowels = 0;
    for (let i=0; i<s.length; i++) {
      if (vowels.includes(s[i])) {
        currVowels++;
      } else {
        currVowels = 0;
      }
      
      maxVowels = Math.max(maxVowels, currVowels);
    }
    
    return maxVowels;
  }