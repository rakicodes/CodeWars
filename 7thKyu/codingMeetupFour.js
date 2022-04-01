/*
* Parameter: array of objects
* Return: string
* Examples: [ {firstName: 'Mark', country: 'Canada', language: 'Javascript'},
              {firstName: 'Emma', country: 'France', language: 'Python'},
              {firstName: 'Sam', country: 'Germany', language: 'Python'}
            ] =>  'Emma, France'
            [ {firstName: 'Mark', country: 'Canada', language: 'Javascript'},
              {firstName: 'Emma', country: 'France', language: 'Java'}
            ] =>  'There will be no Python developers'
* Pseudocode:
* - find the first in the array whose language is Python 
* - get that persons' name and country and format it into a string
*/
function getFirstPython(list) {
    let firstIndex = list.findIndex(person => person.language === 'Python');
    return firstIndex !== -1 ? `${list[firstIndex].firstName}, ${list[firstIndex].country}` : 'There will be no Python developers'
}