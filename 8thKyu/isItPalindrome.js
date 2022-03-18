function isPalindrome(x) {
    let left = 0;
    let right = x.length-1;
    
    while (left<right) {
      if (x[left].toLowerCase()!==x[right].toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
    
    return true;
    
  }