// Parameters
// An array of objects
  
// Return
// The array of objects with a new property
  
// Examples
// list1 = [ {firstName: 'John', lastName: 'Smith', language: 'Java'}, {firstName: 'Mary', 'Williams', language: 'Javascript'} ]
//  => [ {firstName: 'John', lastName: 'Smith', language: 'Java', greeting: 'Hi John, what do you like the most about Java?'}, {firstName: 'Mary', 'Williams', language: 'Javascript' greeting: 'Hi Mary, what do you like the most about Javascript?'} ]

function greetDevelopers(list) {
    // Pseudocode
    
    // go through each item (objects) in the array  
    // add each property to the person 
    list.forEach( person => person.greeting = `Hi ${person.firstName}, what do you like the most about ${person.language}?`)
    
    // return the array
    return list;

}