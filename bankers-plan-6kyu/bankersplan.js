/*
 * f0 - deposit at beginning of year 1
 * f - deposit at beginning of year 1
 * n - number of the years
 * c(0- n) -withdraw each year
 * p - interest rate
 * i - inflation
 */
function bankersPlan(f0, p, c0, n, i) {
  for (let year = 1; year < n; year++) {
    f0 = Math.trunc(f0 + (p / 100) * f0 - c0)
    c0 = c0 + c0 * (i / 100)
    if (f0 < 0) {
      return false;
    }
  }
  return true;
}
module.exports = bankersPlan;


