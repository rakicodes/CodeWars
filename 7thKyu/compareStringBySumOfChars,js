function compare(s1, s2) {
  let ascii1 = s1 == false || !(s1?.toUpperCase().split("").every(x => x.charCodeAt(0) > 64 && x.charCodeAt(0) < 91)) ? -1 : s1.toUpperCase().split("").reduce( (acc,c) => acc+c.charCodeAt(0), 0);
  let ascii2 = s2 == false || !(s2?.toUpperCase().split("").every(x => x.charCodeAt(0) > 64 && x.charCodeAt(0) < 91))? -1 : s2.toUpperCase().split("").reduce( (acc,c) => acc+c.charCodeAt(0), 0);
  
  return ascii1 === ascii2;
}