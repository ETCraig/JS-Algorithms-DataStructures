// Taking a sorted array, and starting in the middle, checks whether the desired value is greater or less
// Then from there a new half way point is selected and the same check is performed
// Until the desired value / index is found

function binarySearch(arr, val) {
  let first = 0;
  let last = arr.length - 1;
  let middle = Math.floor((first + last) / 2);
  while (arr[middle] !== val && first <= last) {
    if (val < arr[middle]) last = middle - 1;
    else first = middle + 1;
    middle = Math.floor((first + last) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

module.exports = binarySearch;
