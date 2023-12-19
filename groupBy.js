Array.prototype.groupBy = function (fn) {
  const obj = {}; // initializing an empty object
  for (let item of this) {
    // this refers array, here we are going to each value in the array
    let key = fn(item); // calling fn on values and storing it in key
    if (!obj.hasOwnProperty(key))
      // if obj does not having any valuein the key that means any value from the input array
      obj[key] = []; // returns empty array
    obj[key].push(item); // else we push every item that corresponds to the value in the array
  }
  return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
