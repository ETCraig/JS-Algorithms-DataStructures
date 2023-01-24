// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   let mapA = {};
//   let mapB = {};
//   let newStringA = stringA.replace(/[^\w]/g, "").toLowerCase().split("").sort();
//   let newStringB = stringB.replace(/[^\w]/g, "").toLowerCase().split("").sort();
//   for (let char of newStringA) {
//     mapA[char] = mapA[char] + 1 || 1;
//   }
//   for (let char of newStringB) {
//     mapB[char] = mapB[char] + 1 || 1;
//   }

//   return JSON.stringify(mapA) === JSON.stringify(mapB);
// }

// function buildCharMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   let aCharMap = buildCharMap(stringA);
//   let bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }
