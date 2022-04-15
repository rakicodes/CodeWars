function titleCase(title, minorWords) {
    if (minorWords) {
      minorWords = minorWords.toLowerCase();
    }
    return title.split(" ").map( (word,i) => {
      word = word.toLowerCase();
      if ( word && (i===0 || !minorWords || !minorWords.split(" ").includes(word))) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return word;
      }
      
    }).join(" ")
  }

