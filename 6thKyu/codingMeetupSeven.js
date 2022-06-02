function findSenior(list) {
    let oldest = Math.max(...list.map(person => person.age));
    return list.filter(person => person.age === oldest);
  }