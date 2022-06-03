function allContinents(list) {
    return [...new Set(list.map(person => person.continent))].length === 5;
  }