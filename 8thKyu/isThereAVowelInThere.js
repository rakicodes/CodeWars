function isVow(a){
    let vowels = ['a','e','i','o','u'].map( c => c.charCodeAt(0));
    
    return a.map( c => vowels.includes(c) ? String.fromCharCode(c) : c)
  }