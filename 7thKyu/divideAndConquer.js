/*
* Parameters: array of string and numbers
* Return: number
* Examples: [1,'2','3',4,'5'] => 5
            [1,2,3,4,5] => 15
            ['1','2'] => -3
            [] => 0
* Pseudocode:
*  Create 2 arrays - one with string digits and another with number digits
*  Sum up both arrays 
*  Calculate the difference between the sum of the 2 arrays
*/
function divCon(x){
    const sumOfStr = x.filter(digit => typeof digit === 'string').reduce( (acc, c) => acc+Number(c), 0);
    const sumOfNum = x.filter(digit => typeof digit === 'number').reduce( (acc, c) => acc+c, 0);
    return sumOfNum - sumOfStr;
  }