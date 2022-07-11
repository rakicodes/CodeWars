function findUniq(arr) {  
    let unique = [...new Set(arr.map(elem => [...new Set(elem.toLowerCase().split("").sort())].join("")))];
  
    const one = [...new Set(arr[0].toLowerCase())].sort().join("");
    for (let i=1; i<arr.length-1; i++) {
      const two = [...new Set(arr[i].toLowerCase())].sort().join("") ;
      const three = [...new Set(arr[i+1].toLowerCase())].sort().join("") ;
      
      if (unique[0]===one && unique[0]===two || unique[0]===one && unique[0]===three || unique[0]===two && unique[0]===three) {
        return arr.find(elem =>[...new Set(elem.toLowerCase())].sort().join("")===unique[1]);
      } else if (unique[1]===one && unique[1]===two || unique[1]===one && unique[1]===three || unique[1]===two && unique[1]===three){
        return arr.find(elem =>[...new Set(elem.toLowerCase())].sort().join("")===unique[0]);
      }
    }
   
  }