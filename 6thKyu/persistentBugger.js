function persistence(num) {
    let strNum = num.toString();
    let count = 0;
    
     while (strNum.length > 1) {
       let val = 1;
       for (let i=0; i<strNum.length; i++) {
         val *= +strNum[i];
       }
       
       strNum = val.toString();
       count++;
       
     }
    
    
    return count;
  }