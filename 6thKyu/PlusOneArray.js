function upArray(arr){
    return arr.every(x => x>=0 && Number.isInteger(x) && x<=9) && arr.length 
                  ? String(BigInt(arr.join(""))+BigInt(1)).split("").map(x => +x) : null
  }