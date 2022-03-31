function countDevelopers(list) {
    let jsEurope = list.filter( person => person.continent === 'Europe' && person.language === 'JavaScript' );
    return jsEurope.length;
  }