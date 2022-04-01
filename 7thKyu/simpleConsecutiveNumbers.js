/*
* Parameter: array of numbers
* Return: number
* Examples: [1,2,5,8,-4,-3,7,6,5] => 3
*           [81, 44, 80, 26, 12, 27, -34, 37, -35] => 0
* Pseudocode:
* - go through the array by twos
* - compare if the two values are either one less or one greater than each other
* - if yes, increment counter
*/
function pairs(ar){
    let pairCounter = 0;
    for (let i=0; i<ar.length-1; i+=2) {
      if ( (ar[i] === ar[i+1]+1) || (ar[i] === ar[i+1]-1) ) {
        pairCounter++;
      }
    }
    return pairCounter;
  };