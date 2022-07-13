function bowlingPins(arr){
    //let pins = "10 9 8 7\n 6 5 4 \n  3 2  \n   1   ";
    //           [0][0] [0][2] [0][4] [0][6] 7-0
    //           [1][1] [1][3] [1][5] 7-1
    //           [2][2] [2][4] 7-2
    //           [3][3] 7-3
    
    let res = [];
    let count = 10;
    for (let i=0; i<4; i++) {
      let row = "";
      for (let j=0; j<7; j++) {
        if (i<=j && j<(7-i)) {
            if ( ((i%2===0 && j%2===0) || (i%2!==0 && j%2!==0)) ) {
              if (!arr.includes(count)) {
                row += "I";
              } else {
                row += " ";
              }
              count--;
            } else {
              row += " ";
            }
          
            
        } else {
          row += " ";
        }
      }
      
      row = row.split("").reverse().join("");
      res.push(row);
    }
    return res.join("\n")
  }