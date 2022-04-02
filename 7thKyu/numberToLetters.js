/*
* Parameter: array of numbers
* Return: string
* Example: ['24', '12', '23', '22', '4', '26', '9', '8'] => 'codewars'
* Pseudocode:
* - create an object that stores the alphabet and !, ?, ' '
* - go through the array and check the object for a match and store that to the string
*/
function switcher(x){
    const obj = {
    29: ' ',
    28: '?',
    27: '!',
    26: 'a',
    25: 'b',
    24: 'c',
    23: 'd',
    22: 'e',
    21: 'f',
    20: 'g',
    19: 'h',
    18: 'i',
    17: 'j',
    16: 'k',
    15: 'l',
    14: 'm',
    13: 'n',
    12: 'o',
    11: 'p',
    10: 'q',
    9: 'r',
    8: 's',
    7: 't',
    6: 'u',
    5: 'v',
    4: 'w',
    3: 'x',
    2: 'y',
    1: 'z',
  }
    
    let str = '';
    for (let i=0; i<x.length; i++) {
      str += obj[x[i]];
    }
    return str;
  }