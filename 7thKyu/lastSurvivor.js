function lastSurvivor(letters, coords) {
    let arr = letters.split("")
    for (let i=0; i<coords.length; i++){
      arr.splice(coords[i], 1)
    }
      return arr.join("")
    }