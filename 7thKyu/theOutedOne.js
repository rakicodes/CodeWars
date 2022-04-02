/*
* Parameters: object and string
* Return: string
* Example:  {'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura') => 'Get Out Now!'
            {'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie') => 'Nice Work Champ!'
* Pseudocode: 
* - go through each value in the object, add the rating to the total, divide total by the size
*/
function outed(meet, boss){
    let total = 0;
    for (let person in meet) {
      if (person===boss) {
        total += meet[person]*2;
      } else {
        total += meet[person];
      }
    }
    let avg = total / Object.keys(meet).length
    return avg <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
  }