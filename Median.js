/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */
const median = function(arr) {
  if (arr.length === 0) {
    return;
  }
  arr.sort((a, b) => a - b);
  const midpoint = Math.floor(arr.length / 2);
  const median = arr.length % 2 === 1 ?
    arr[midpoint] : (arr[midpoint - 1] + arr[midpoint]) / 2;
  return median;
};
