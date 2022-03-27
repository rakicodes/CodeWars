function gimme (triplet) {
    let minVal = Math.min(...triplet);
    let maxVal = Math.max(...triplet);
    return 3-triplet.indexOf(minVal)-triplet.indexOf(maxVal);
  }