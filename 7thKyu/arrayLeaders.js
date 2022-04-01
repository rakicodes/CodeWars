/*
* Parameter: array of integers
* Return: array of integers
* Examples: [1,2,2,3,2]     => [3]
*           [1,2,3,4,5]     => []
            [0,-1,-29,3,2]  => [0,-1,3,2]
* Pseudocode:
* - go through each element, find the sum from the next element to the end of the array
* - compare if current element is greater than the sum
* - if yes, add value to new array
*/
function arrayLeaders(numbers){
    let leaders = [];
    
    for (let i=0; i<numbers.length; i++) {
      let sum = numbers.slice(i+1).reduce( (acc, c) => acc+c, 0);
      if (numbers[i] > sum) {
        leaders.push(numbers[i]);
      }
    }
    
    return leaders;
  }