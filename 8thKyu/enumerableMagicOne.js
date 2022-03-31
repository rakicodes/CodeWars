/*
* Parameter - arr - array of num
            - fun - function
* Return - boolean
* Examples - [],        function(n) { return n>5 } => true
*          - [1,2,3,4], function(n) { return n>5 } => false
*          - [1,2,3,4], function(n) { return n<5 } => true
* Pseudocode
*  - go through each element in the array
*  - pass each element in the array in the function
*  - check if the element passes
*  - if it doesn't pass, return false
*  - else, return true;
*/
function all( arr, fun ){
    for (let i=0; i<arr.length; i++) {
      if (!fun(arr[i])) {
        return false;
      }
    }
    
    return true;
  }