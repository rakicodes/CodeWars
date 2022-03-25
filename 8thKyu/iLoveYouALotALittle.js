function howMuchILoveYou(nbPetals) {
    let phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    
    let phrase = phrases[0];
    let index = 0;
    while (nbPetals > 1) {
      if (index===5) {
        index = 0;
      } else {
        index++;
      }
      phrase = phrases[index];
      nbPetals--;
    }
    
    return phrase;
  }