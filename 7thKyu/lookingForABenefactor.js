function newAvg(arr, newavg) {
    let total = arr.reduce((acc,c) => acc+c, 0);
    let nextDonation = (newavg * (arr.length+1)) - total;
    if (nextDonation <= 0) {
      throw "Expected New Average is too low"
    }
    return Math.ceil(nextDonation);
  }