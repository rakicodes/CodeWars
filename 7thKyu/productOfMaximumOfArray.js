/*
* Parameter: array of numbers, number
* Return: number
* Example: [4,3,5],2 => 20
*          [10,8,7,9], 3 => 720
* Pseudocode:
* - sort numbers in an ascending order
* - multiply the last n numbers together to get max product
*/
function maxProduct(numbers, size){
    numbers.sort( (a,b) => a-b );
    return numbers.slice(-size).reduce( (acc,c) => acc*c, 1)
  }