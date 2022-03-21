function betterThanAverage(classPoints, yourPoints) {
  let avg = (classPoints.reduce( (a,b) => a+b, 0) + yourPoints) / (classPoints.length+1);
  
  return yourPoints > avg ? true : false;
}