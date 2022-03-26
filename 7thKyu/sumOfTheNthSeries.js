function SeriesSum(n)
{
  let sum = 0;
  let dividend = 4;
  for (let i=0; i<n; i++) {
    if (i===0) {
      sum += 1;
    } else if (i===1) {
      sum += (1/dividend);
    } else {
      dividend += 3;
      sum += (1/(dividend));
    }
    
  }
  
  return sum.toFixed(2);
}