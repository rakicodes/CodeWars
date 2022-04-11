function expandedForm(num) {
    let strNum = num.toString();
    let expanded = "";
    for (let i=0; i<strNum.length; i++) {
      let value = Number(strNum[i])*(10**(strNum.length-1-i));
      if (i==0 && value !== 0) {
        expanded += `${value}`;
      } else if (i===strNum.length-1 && value !== 0) {
        expanded += ` + ${strNum[i]}`;
      } else if (value !== 0) {
        expanded += ` + ${value}`;
      }
    }
    
    
    return expanded;
  }