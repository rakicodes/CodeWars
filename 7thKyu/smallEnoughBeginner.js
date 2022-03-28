function smallEnough(a, limit){
    let limitArr = a.filter( elem => elem > limit);
    return limitArr.length > 0 ? false : true;
  }