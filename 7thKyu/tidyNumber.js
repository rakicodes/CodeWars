/*
* Parameter - positive number
* Return - boolean
* Examples - 13 => true
           - 222 => true
           - 650 => false
           - 362 => false
* Pseudocode
  - convert number to string
  - covert string to an array with each digit as one element
  - convert each item to a number
  - go through the array and compare if the next item is larger or not
  - if not larger return false
  - else return true
*/
function tidyNumber(n){
    let strNum = String(n);
    let arrNum = strNum.split('').map(num => Number(num));
    
    for (let i=0; i<arrNum.length-1; i++) {
      if (arrNum[i] > arrNum[i+1]) {
        return false;
      }
    }
    
    return true;
    
  }