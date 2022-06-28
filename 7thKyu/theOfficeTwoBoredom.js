function boredom(staff){
    let score = 0;
    const scoreKey = {
      accounts: 1,
      finance: 2,
      canteen: 10,
      regulation: 3,
      trading: 6,
      change: 6,
      IS: 8,
      retail: 5,
      cleaning: 4,
      "pissing about": 25
    }
    
    for (let person in staff) {
      score += scoreKey[staff[person]];
    }
    
    if (score <= 80) {
      return 'kill me now'
    } else if (score < 100 && score > 80) {
      return 'i can handle this'
    } else if (score > 100) {
      return 'party time!!'
    }
    
  }