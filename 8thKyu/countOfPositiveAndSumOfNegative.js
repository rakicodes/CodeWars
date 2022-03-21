function countPositivesSumNegatives(input) {
    if (input===null || input.length===0) {
      return [];
    }
    
    let ans = [0, 0];
    input.forEach(val => val>0 ? ans[0]++ : ans[1]+=val)
    
    return ans;
  }