function check(a, x) {
    for (let val of a) {
      if (val===x) {
        return true;
      }
    }
    return false;
  }