var encryptThis = function(text) {
    return text.split(" ")
                .map( elem => {
                  if (elem.length === 1) {
                    return elem.charCodeAt(0);
                  } else if (elem.length === 2) {
                    return elem.charCodeAt(0) + elem[1];
                  } else if (elem.length === 3) {
                    return elem.charCodeAt(0) + elem[elem.length-1] + elem[1];
                  } else {
                    return elem.charCodeAt(0) + elem[elem.length-1] + elem.substring(2, elem.length-1) + elem[1];
                  }
                }).join(" ");
  }