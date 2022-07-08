function loopArr(arr, direction, steps) {
    if (direction === "left") {
      for (let i = 0; i < steps; i++) {
        arr.push(arr.shift());
      }
    } else {
      for (let i = 0; i < steps; i++) {
        arr.unshift(arr.pop());
      }
    }
    return arr;
  }