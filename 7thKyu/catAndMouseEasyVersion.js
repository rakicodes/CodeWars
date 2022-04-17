function catMouse(x){
    return x.split("").filter(elem => elem === '.').length > 3 ? 'Escaped!' : 'Caught!'
  }