function changeMe(moneyIn){
    console.log(moneyIn);
    let money = moneyIn[0] === '£' ? Number(moneyIn.slice(1))*100 : Number(moneyIn.slice(0,-1));
    let change = [];
    while (money > 0) {
      if (change.length===0 && money===20) {
        change.push("10p");
        change.push("10p");
        money -= 20;
      }else if (money >= 20) {
        change.push("20p");
        money -= 20;
      } else if (money >= 10) {
        change.push("10p");
        money -= 10;
      }
    }
      
    return change.length === 0 ? moneyIn : change.join(" ");
  }