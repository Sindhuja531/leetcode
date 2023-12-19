/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => {
    return fn(a) > fn(b) ? 1 : -1; // here we sued terinary operation if statement is true return 1 or else -1, this is taken from the array.prototype.sort() from mdn website
  }); // here we use function in javascript for sorting Array.prototype.sort()
};
