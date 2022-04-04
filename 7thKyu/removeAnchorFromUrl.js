function removeUrlAnchor(url){
    let newUrl = '';
    for (let i=0; i<url.length; i++) {
      if (url[i]==='#') {
        break;
      }
      newUrl += url[i];
    }
    
    return newUrl;
  }