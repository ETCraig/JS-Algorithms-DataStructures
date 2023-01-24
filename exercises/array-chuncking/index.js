// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

module.exports = chunk;

// function chunk(array, size) {
//   let parentArray = [];
//   let tempArray = [];
//   array.map((i, index) => {
//     if (index === array.length - 1 || size === 1) {
//       tempArray.push(i);
//       parentArray.push(tempArray);
//       tempArray = [];
//     } else if (tempArray.length === size) {
//       parentArray.push(tempArray);
//       tempArray = [];
//       tempArray.push(i);
//     } else {
//       tempArray.push(i);
//     }
//   });
//   return parentArray;
// }

// function chunk(array, size) {
//   let chunked = [];
//   let index = 0;
//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }

//   return chunked;
// }
