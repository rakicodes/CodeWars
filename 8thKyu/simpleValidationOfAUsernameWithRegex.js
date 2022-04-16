function validateUsr(username) {
    for (let i=0; i<username.length; i++) {
      let code = username.charCodeAt(i);
      if (!(code > 47 && code < 58) && !(code > 96 && code < 123) && code !== 95 ) {
        return false;
      }
    }
    
    return username.length >=4 && username.length <=16 ? true : false;
  }