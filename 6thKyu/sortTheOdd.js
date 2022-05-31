function sortArray(array) {
    let odd = array.filter(x => x%2 !== 0).sort((a,b) => a-b)
    return array.map(x => x%2 === 0 ? x : odd.shift())
  }