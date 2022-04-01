/*
* Parameter: array of strings and an optional number
* Return: array of strings
* Examples: ['a','b','c'] => ['a']
            ['a','b','c'], 2 => ['a','b']
            ['a','b','c'], 0 => [];
* Pseudocode:
* - slice the string up to the number given
*/
function first(arr, n=1) {
    return n!==0 ? arr.slice(0,n) : [];
  }