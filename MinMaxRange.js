/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  let minimum = arr[0];
  for (let num = 1; num < arr.length; num++) {
    if (minimum > arr[num]) {
      minimum = arr[num];
    }
  }
  return minimum;
};



/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  let highest = arr[0];
  for (let num = 1; num < arr.length; num++) {
    if (arr[num] > highest) {
      highest = arr[num];
    }
  }
  return highest;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  let minimum = arr[0];
  let maximum = arr[0];
  for (let num = 1; num < arr.length; num++) {
    if (minimum > arr[num]) {
      minimum = arr[num];
    } if (maximum < arr[num]) {
      maximum = arr[num];
    }
  }
  return maximum - minimum;
};
