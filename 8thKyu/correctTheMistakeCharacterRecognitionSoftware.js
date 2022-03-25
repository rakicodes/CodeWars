function correct(string)
{
  return string.split("").map( char => {
    if (char==='5') {
      char = 'S';
    } else if (char==='0') {
      char = 'O';
    } else if (char==='1') {
      char = 'I';
    }
    return char;
  }).join("");
}