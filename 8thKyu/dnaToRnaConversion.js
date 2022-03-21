function DNAtoRNA(dna) {
    return dna.split("").map(char => char==="T" ? char="U" : char=char).join("");
  }