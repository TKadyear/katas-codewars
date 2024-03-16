function persistence(num) {
  if (num <= 9) {
    return 0;
  }
  const splitNum = `${num}`.match(/./g);
  const newNum = splitNum.reduce((prev, current) => prev * current);
  return (newNum <= 9) ? newNum : persistence(newNum);
};
module.exports = persistence;
