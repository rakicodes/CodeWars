function well(x){
    let good = x.filter( elem => elem==='good');
    if (good.length===0) {
      return 'Fail!';
    } else if (good.length<=2) {
      return 'Publish!';
    } else {
      return 'I smell a series!';
    }
  }