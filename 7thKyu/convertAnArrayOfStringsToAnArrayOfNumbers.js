// Parameters - an array of strings
// Return - an array of numbers
/* Examples 
*  ['1','2','3'] => [1,2,3]
*  ['2.1','5.5','3.8'] => [2.1,5.5,3.8]
*/
function toNumberArray(stringarray){
    // Pseudocode
    // go through each item in the array
    // covert string to a number
    stringarray.forEach( (str,i) => stringarray[i] = Number(str));
    
    // return array
    return stringarray;
  }