function findOddNames(list) {
    return list.filter(person => person.firstName.split("").reduce((acc,c) => acc+c.charCodeAt(0), 0) % 2 !== 0)
  }