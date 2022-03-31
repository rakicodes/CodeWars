/*
* Parameters - teams - array of strings
*            - scores - array of numbers
* Return - string
* Examples - ['Germany', 'Ukraine'], [2,0] => 'At match Germany - Ukraine, Germany won!'
*          - ['Belgium', 'Italy'], [0,2] => 'At match Belgium - Italy, Italy won!'
*          - ['Portugal', 'Iceland'], [1,1] => 'At match Portugal - Iceland, teams played draw.'
* Pseudocode
*  - check which team won
*  - create and format string to match example
*  - return string
*/

function uefaEuro2016(teams, scores){
    let winner;
    if (scores[0] > scores[1]) {
      winner = teams[0];
    } else if (scores[0] < scores[1]) {
      winner = teams[1];
    } else {
      winner = 'draw';
    }
    
    let str = `At match ${teams[0]} - ${teams[1]}, `
    return winner === 'draw' ? str += `teams played draw.` : str += `${winner} won!`;
  }