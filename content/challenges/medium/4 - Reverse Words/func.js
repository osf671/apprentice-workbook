// Write a function that takes a string of one or more words as an argument and returns the same string, 
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.
// Notes:
//   - You can expect a valid string to be provided for each test case.
module.exports = (str) => {
  var reverseStr = "";
  if (str.length < 5){
    return str;
  }
 for (var i = str.length - 1; i >= 0; i--){
  let curLetter = str[i];
  reverseStr = reverseStr + curLetter
 }
return reverseStr
}