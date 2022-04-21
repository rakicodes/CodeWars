function shortenToDate(longDate) {
    return longDate.split(' ').slice(0, -1).join(' ').slice(0, -1);
  }