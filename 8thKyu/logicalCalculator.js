/*
* Parameter: array of booleans
* Return: boolean
* Example: [true, true, true, false], "AND" => false
           [true, true, true, false], "OR" => true
           [true, true, true, false], "XOR" => true
* Pseudocode:
* - go through each bool in array
* - check operator if AND, return true only if both value are true
* - if OR, return true if one or both of the value are true
* - if XOR, return true only if one value is true 
* - else, return false
*/
function logicalCalc(array, op){
    let currBool = array[0];
    
    for (let i=1; i<array.length; i++) {
      if (op==='AND') {
        currBool = currBool && array[i];
      } else if (op==='OR') {
        currBool = currBool || array[i];
      } else if (op==='XOR') {
        currBool = Boolean(currBool ^ array[i]);
      }
    }
    
    return currBool;
  }