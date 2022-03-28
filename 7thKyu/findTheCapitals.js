var capitals = function (word) {
    let capitalsIndex = [];
    for (let i=0; i<word.length; i++) {
      if (word[i]===word[i].toUpperCase()) {
        capitalsIndex.push(i);
      }
    }
    return capitalsIndex;
  };