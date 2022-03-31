/*
* Parameter - array of strings
* Return - array of strings
* Examples - [] => []
           - ['apple','rottenApple', 'orange'] => ['apple', 'apple', 'orange']
           - ['rottenBanana'] => ['banana']
           - ['apple', 'banana'] => ['apple', 'banana']
* Pseudocode
*  - go through each fruit in the array
*  - find fruits with string 'rotten' in it
*  - remove rotten string  
*  - turn the uppercase string into lowercase
*  - return the array
*/
function removeRotten(bagOfFruits){
    return bagOfFruits ? bagOfFruits.map( fruit => fruit.replace('rotten','').toLowerCase()) : []
  }