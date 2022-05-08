function sortTheInnerContent(words)
{
  return words.split(" ").map(x => {
    if (x.length <= 2) {
      return x;
    } else {
      return x[0] + x.slice(1,-1).split("").sort().reverse().join("") + x[x.length-1];
    }
  }).join(" ");
}