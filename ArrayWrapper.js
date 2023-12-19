var ArrayWrapper = function (nums) {
  this.nums = nums; // setting it to the number variable
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((n, a) => n + a, 0); //nsum of this array can be added using reduce methos in javascript, n is number, a is accumulator here 0 is initialized as accumulaor, a=0
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return `[${String(this.nums)}]`; //cpnverting array to string and with $ and curly braces we can change it to a variable, this is used for the reference of nums, `` are used for adding outer brackets
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
