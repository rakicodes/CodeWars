function getAverageAge(list) {
    return list.length !== 0 ? 
        Math.round(list.reduce((acc,c) => acc+c.age, 0) / list.length)
        : 0;
  }