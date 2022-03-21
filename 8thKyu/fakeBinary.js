function fakeBin(x){
    let strOfDigits = "";
    for (let char of x) {
      strOfDigits += char>=5 ? "1" : "0";
    }
    return strOfDigits;
  }