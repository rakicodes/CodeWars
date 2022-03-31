function cubeOdd(arr) {
    return arr.some(val => Number.isFinite(val)===false) ? 
            undefined : 
            arr.map( val => val**3)
              .filter( val => Math.abs(val % 2) === 1)
              .reduce( (acc, c) => acc+c, 0);
    }