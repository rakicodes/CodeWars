/*
* Parameter: array of integers, number
* Return: number
* Example: [3,1,2],     2 => 2
*          [4,2,5,3,7], 3 => 4
           [4,4,4,4],   6 => 4 ??
           [1,1,2,-3,4],4 => 1 or 4 ??
* Pseudocode:
* - find the smallest num in the array
* - remove that number  
* - repeat again until position is 1
*/
function nthSmallest(arr, pos){
    let smallest = Math.min(...arr);
    
    arr.splice(arr.indexOf(smallest), 1);
    
    while (pos > 1) {
      smallest = Math.min(...arr);
      arr.splice(arr.indexOf(smallest), 1);
      pos--;
    }
    
    return smallest;
  }