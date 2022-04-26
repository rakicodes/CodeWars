function calculate(str) {

    return str.split("plus")
              .map(num => Number.isNaN(+num) ? num.split("minus") : +num)
              .reduce( (acc,c) => {
                          if (Array.isArray(c)) {
                            return acc + c.reduce((acc2, c2) => acc2-Number(c2));
                          }
                          return acc + c;
                      }, 0)
              .toString();
  }