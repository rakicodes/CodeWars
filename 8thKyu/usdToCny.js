function usdcny(usd) {
    let yuan = parseFloat(usd)*6.75;
    return `${yuan.toFixed(2)} Chinese Yuan`;
  }