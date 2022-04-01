/*
* Parameter: array of integers
* Return: number
* Example: [4,5,7,6]    => 18
           [-1,5,-2,9]  => 13
           [2,4,4,1,5]  => 11
* Psuedocode:
* - remove duplicates by creating a set, then convert to array
* - sort numbers by ascending order
* - get the sum of the last 3 numbers in the array
*/

function maxTriSum(numbers){
    let set = new Set();
    for (let num of numbers) {
      set.add(num);
    }
    
    let removeDups = [];
    for (let num of set) {
      removeDups.push(num);
    }
    
    removeDups.sort( (a,b) => a-b );
    return removeDups.slice(-3).reduce( (acc, c) => acc+c, 0);
    
  }