var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      let sum = 0;
      let index = 0;
      let str = "";
      while (index <= count) {
        if (index===count) {
          str += `${index}`
        } else {
          str += `${index}+`
        }
        sum += index;
        index++;
      }
      
      if (count < 0) {
        str = `${count}<0`;
      } else if (count === 0) {
        str = '0=0';
      } else {
        str += ` = ${sum}`
      }
      
      return str;
      
    };
  
    return SequenceSum;
  
  })();