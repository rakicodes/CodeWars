var FilterString = function(value) {
    return Number(value.split("")
                .filter(elem => elem.charCodeAt(0) > 47 && elem.charCodeAt(0) < 58)
                .join(""));
                
  }