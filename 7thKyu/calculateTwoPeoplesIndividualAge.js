function getAges(sum,difference){
    if (sum < 0 || difference < 0) {
      return null;
    }
    
    let age1 = (sum-difference) / 2 ;
    let age2 = ((sum-difference) / 2) + difference;
    
    return age1 < 0 || age2 < 0 ? null : [age1,age2].sort((a,b) => b-a);
  };