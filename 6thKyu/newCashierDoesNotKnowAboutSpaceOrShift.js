function getOrder(input) {
    let newOrder = [];
   
    for (let i=0; i<input.length; i++) {
      if (input.substring(i, i+6) === "burger") {
        newOrder.push("Burger");
      } else if (input.substring(i, i+5) === "fries") {
        newOrder.push("Fries");
      } else if (input.substring(i, i+7) === "chicken") {
        newOrder.push("Chicken");
      } else if (input.substring(i, i+5) === "pizza") {
        newOrder.push("Pizza");
      } else if (input.substring(i, i+8) === "sandwich") {
        newOrder.push("Sandwich");
      } else if (input.substring(i, i+10) === "onionrings") {
        newOrder.push("Onionrings");
      } else if (input.substring(i, i+9) === "milkshake") {
        newOrder.push("Milkshake");
      } else if (input.substring(i, i+4) === "coke") {
        newOrder.push("Coke");
      }
    }
  
    let sortOrder = {
      Burger: 1,
      Fries: 2,
      Chicken: 3,
      Pizza: 4,
      Sandwich: 5,
      Onionrings: 6,
      Milkshake: 7,
      Coke: 8,
    }
    
    newOrder.sort( (a,b) => sortOrder[a]-sortOrder[b] );
    return newOrder.join(" ");
  }