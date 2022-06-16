function isIntArray(arr) {
    return arr ? arr.every(x => typeof x === "number" && !Number.isNaN(x) && !String(x).includes(".")) : false
  }