function bingo(ticket, win){
    let count = 0;
    for (let i=0; i<ticket.length; i++) {
      const letters = ticket[i][0].split('');
      if (letters.some(letter => letter.charCodeAt(0) === ticket[i][1])) {
        count += 1;
      }
    }
    
    return count >= win ? 'Winner!' : 'Loser!'
  }