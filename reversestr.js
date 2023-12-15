var reverseString = function (s) {
  let first = 0;
  let last = s.length - 1;
  while (first <= last) {
    let temp = s[first]; // swapping the positions of first and last with temp variable
    s[first] = s[last];
    s[last] = temp;
    first++; // increment from left to right
    last--; // decrement from right to left until we reach the whole string to be reversed
  }
  return s; // return the output
};
