/*
* Parameter: array of objects
* Return: object
* Example: list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
  ] => { C: 2, JavaScript: 1, Ruby: 1 }
* Pseudocode:
* - create an object to store count of each languages
* - go through each element in the array
* - if language is not in the property add to object
* - else increment count of language
*/
function countLanguages(list) {
    let counter = {};
    for (let person of list) {
      if (counter[person.language]) {
        counter[person.language] = counter[person.language] + 1;
      } else {
        counter[person.language] = 1;
      }
    }
    
    return counter;
  }