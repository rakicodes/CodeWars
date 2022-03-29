function flattenAndSort(array) {
    let flatten = array.reduce( (acc,c) => acc.concat(c), []);
    return flatten.sort( (a,b) => a-b );
  }