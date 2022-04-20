function stat(strg) {
    let arr = strg.split(",")
    arr = arr.map(time => time.trim().split("|").reduce( (acc,c, i) => {
      if (i===0) {
        return +c*60*60 + acc;
      } else if (i===1) {
        return +c*60 + acc;
      } else if (i===2) {
        return +c + acc;
      }
      
    },0));
    
    const range = Math.max(...arr) - Math.min(...arr);
    const avg = arr.reduce( (acc,c) => acc+c, 0) / arr.length;
    
    arr.sort((a,b) => a-b)
    const median = arr.length % 2 === 0 ? (arr[(arr.length/2)-1]+arr[(arr.length/2)])/2 : arr[Math.floor(arr.length/2)]; 
    
    return strg ? `Range: ${getTime(range)} Average: ${getTime(avg)} Median: ${getTime(median)}` : ''
  }
  
  function getTime(s) {
    const hour = Math.floor(s/3600);
    const min = Math.floor((s-(hour*3600))/60);
    const sec = Math.floor(s-(hour*3600)-(min*60));
    return `${hour < 10 ? '0'+hour : hour}|${min < 10 ? '0'+min : min}|${sec < 10 ? '0'+sec : sec}`
    
  }