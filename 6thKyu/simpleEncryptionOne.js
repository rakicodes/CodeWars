function encrypt(text, n) {
    if (text === null) {
      return text;
    }
    while (n > 0) {
      const odd = text.split("").filter( (x,i) => i % 2 === 1).join("");
      const even = text.split("").filter( (x,i) => i % 2 === 0).join("");
      text = odd+even;
      n--;
    }
    return text;
  }
  
  function decrypt(encryptedText, n) {
    while (n > 0) {
      const odd = encryptedText.slice(0, Math.floor(encryptedText.length / 2));
      const even = encryptedText.slice(Math.floor(encryptedText.length / 2));
  
      let text = '';
      for (let i=0; i<Math.floor(encryptedText.length / 2); i++) {
        text += even[i];
        text += odd[i];
        console.log(text);
      }
      
      if (even.length > odd.length) {
        text += even[even.length-1];
      }
      
      encryptedText = text;
      n--;
    }
    
    return encryptedText;
  }
