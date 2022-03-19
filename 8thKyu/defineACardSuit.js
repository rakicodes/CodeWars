function defineSuit(card) {
    if (card[card.length-1]==='♣') {
      return 'clubs'
    } else if (card[card.length-1]==='♦') {
      return 'diamonds'
    } else if (card[card.length-1]==='♥') {
      return 'hearts'
    } else if (card[card.length-1]==='♠') {
      return 'spades'
    } else {
      return 'invalid'
    }
  }