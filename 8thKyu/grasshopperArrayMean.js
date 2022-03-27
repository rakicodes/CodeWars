var findAverage = function (nums) {
    return nums.reduce((acc, prev) => acc+prev, 0) / nums.length;
  }