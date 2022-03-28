function minValue(values){
  let set = new Set();
  for (let value of values) {
    set.add(value);
  }
  
  let arr = [];
  for (let value of set) {
    arr.push(value);
  }
  
  arr.sort();
  return Number(arr.join(""));
  
}