function countSmileys(arr) {
    const smiles = ')D';
    const eyes = ":;";
    const noses = "-~"
    
    return arr.filter(elem => elem.length === 2 ? 
                              eyes.includes(elem[0]) && smiles.includes(elem[1]) :
                              eyes.includes(elem[0]) && noses.includes(elem[1]) && smiles.includes(elem[2]) 
                      ).length;
  }