// Visiting one item at a time from either the beginning or end

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

// function linearSearch(arr, value) {
//   return arr.indexOf(value);
// }

module.exports = linearSearch;
