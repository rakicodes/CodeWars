function oddOrEven(array) {
    let sum = array.reduce( (acc, prev) => acc+prev, 0);
    return sum % 2 === 0 ? "even" : "odd";
  }