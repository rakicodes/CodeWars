/*
* Parameter: string
* Return: string
* Example: 'hello world' => 'h e l l o   w o r l d'
* Pseudocode:
* - convert string to array
* - convert array to string joined a space 
*/
function spacify(str) {
    return str.split("").join(" ");
  }