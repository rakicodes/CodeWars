/*
* Parameter: string
* Return: number
* Examples: 'abcdef' => 6
* Pseudocode:
* - create a string to store total1, create another string to store total2
* - go through each char in the string and get its ascii code
* - store ascii code in total1 and total2
* - in total2 if ascii code has 7 replace with a 1
* - get the sum of digit in total1 and total2
* - return the difference between the sum of the totals
*/
function calc(x){
    let total1 = '';
    let total2 = '';
    
    for (let i=0; i<x.length; i++) {
      let ascii = String(x.charCodeAt(i));
      if (ascii.includes('7')) {
        total2 += ascii.split('').map(digit => digit==='7' ? '1' : digit).join('');
      } else {
        total2 += ascii;
      }
      total1 += ascii;
    }
    
    let sum1 = total1.split('').reduce( (acc,c) => acc+Number(c), 0);
    let sum2 = total2.split('').reduce( (acc,c) => acc+Number(c), 0);
    
    return sum1 - sum2;
    
    
  }