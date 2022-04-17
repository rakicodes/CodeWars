function solve(s) {
    let substringSum = 0;
    let maxSubstring = 0;
    
    let vowels = ['a','e','i','o','u'];
    for (let i=0; i<s.length; i++) {
      if (vowels.includes(s[i])) {
        substringSum = 0;
      } else {
        substringSum += s.charCodeAt(i) - 96;
      }
      
      maxSubstring = Math.max(maxSubstring, substringSum);
    }
    
    return maxSubstring;
  };