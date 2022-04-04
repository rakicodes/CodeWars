var isAnagram = function(test, original) {
    if (test.length !== original.length) {
      return false;
    }
    const testLower = test.toLowerCase();
    const originalLower = original.toLowerCase();
    
    let anagram = {};
    for (let i=0; i<test.length; i++) {
      if (testLower[i] in anagram) {
        anagram[testLower[i]] = anagram[testLower[i]]+1;
      } else {
        anagram[testLower[i]] = 1;
      } 
      
      if (originalLower[i] in anagram) {
        anagram[originalLower[i]] = anagram[originalLower[i]]-1;
      } else {
        anagram[originalLower[i]] = -1;
      }  
    }
    
    for (let key in anagram) {
      if (anagram[key] !== 0) {
        return false;
      } 
    }
    
    return true;
    
  };