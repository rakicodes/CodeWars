/*
* Parameter - an array of an array of numbers
* Return - string
* Examples - [ [1,2,3], [4,5,6] ] => '1,2,3\n4,5,6'
           - [ [4,56,71], [8,73,12], [9,15,22] ] => '4,56,71\n8,73,12\n9,15,22'
* Pseudocode
*  - join the inner array with ,
*  - join the outer array with \n
*/

function toCsvText(array) {
    for (let i=0; i<array.length; i++) {
      array[i] = array[i].join(',');
    }
    return array.join('\n');
  }