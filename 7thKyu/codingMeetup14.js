function orderFood(list) {
    let food = {};
    list.forEach(person => {
      if (person.meal in food) {
        food[person.meal] = food[person.meal]+1;
      } else {
        food[person.meal] = 1;
      }
    })
    
    return food;
  }