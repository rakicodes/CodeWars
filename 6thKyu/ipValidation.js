function isValidIP(str) {
    if (str.split(".").length !== 4) {
      return false;
    }
    
    return str.split(".").every(elem => elem >= 0 && elem <= 255 && elem.length === String(parseInt(elem)).length) &&
            str.split("").every(elem => (elem.charCodeAt(0) > 47 && elem.charCodeAt(0) < 58) || elem.charCodeAt(0)===46);
    
          
  }