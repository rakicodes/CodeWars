/*
* Parameters: number
* Return: string
* Examples: -2 => ""
            1 => "1"
            4 => "1
                  22
                  333
                  4444"
* Pseudocode:
* - create a for loop, for each index up to and including n 
* - concat to string each index, repeat index an index number of times
*/
function pattern(n){
    let str = '';
    for (let i=1; i<=n; i++) {
      if (i===n) {
        str += `${String(i).repeat(i)}`
      } else {
        str += `${String(i).repeat(i)}\n`
      }  
    }
    
    return n<1 ? '' : str ;
  }