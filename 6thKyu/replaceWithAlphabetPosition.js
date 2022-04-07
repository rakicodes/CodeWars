function alphabetPosition(text) {
    let count = [];
    for (let i=0; i<text.length; i++) {
      let code = text.toLowerCase().charCodeAt(i)
      if (code >= 97 && code <= 122) {
        count.push(code-96);
      }
    }
    
    return count.join(' ');
  }