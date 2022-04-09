function solution(str){
    let arr = [];
   
     for (let i=0; i<str.length; i+=2) {
       arr.push(str.substring(i,i+2));
     }
   
     if (str.length % 2 === 1) {
       arr[arr.length-1] += '_';
     }
     
     return arr;
 }