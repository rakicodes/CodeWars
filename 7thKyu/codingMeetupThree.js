/*
* Parameter - array of objects
* Return - boolean
* Examples - [ {firstName: 'Mary', language: 'Ruby'} ] => true
*          - [ {firstName: 'Mary', language: 'Java'} ] => false
* Pseudocode
*  - go through each person in the array
*  - check the language property and see if the value is 'Ruby'
*  - if the whole array doesn't include 'Ruby' return false
*  - else return true
*/
function isRubyComing(list) {
    for (let person of list) {
      if (person.language === 'Ruby') {
        return true;
      }
    } 
    
    return false;
  }