// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reverse().join("");
}

module.exports = reverse;

// function reverse(str) {
//   let strArray = str.split("");
//   let reversedArray = [];
//   for (let i = str.length; i > -1; i--) {
//     reversedArray.push(strArray[i]);
//   }
//   return reversedArray.join("");
// }

// function reverse(str) {
//   let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// function reverse(str) {
//   str.split("").reduce((rev, char) => character + rev, "");
// }
