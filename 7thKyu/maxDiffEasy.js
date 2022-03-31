function maxDiff(list) {
    return list.length > 1 ? Math.max(...list)-Math.min(...list) : 0;
  };