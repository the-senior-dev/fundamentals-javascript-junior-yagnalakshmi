/**
 * Returns a new array with the elements in reverse order
 * @example
 * reverseArray([1, 2, 3]) // => [3, 2, 1]
 * @param {Array} arr
 * @returns {Array}
 */
function reverseArray(arr) {
  for (let i = 0; i <= Math.ceil(arr.length - 1) / 2; i++) {
    let j = arr.length - 1 - i;
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

module.exports = reverseArray;
