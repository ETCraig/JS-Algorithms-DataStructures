// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

// function vowels(str) {
//   let strArray = str.toLowerCase().split("");
//   let regExp = /^[aeiou]$/i;
//   let count = 0;
//   strArray.map((l) => {
//     if (regExp.test(l)) {
//       count++;
//     }
//   });
//   return count;
// }

// function vowels(str) {
//   let count = 0;
//   const checks = ["a", "e", "i", "o", "u"];

//   for (let char of str.toLowerCase()) {
//     if (checks.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }
