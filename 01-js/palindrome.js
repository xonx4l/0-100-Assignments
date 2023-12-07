/*
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
*/
function isPalindrome(str) {
  if (!str || typeof str !== 'string') {
    return false; 
  }

  const cleanedStr = str.toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');

  return cleanedStr === reversedStr;
}

console.log(isPalindrome("Nan")); 
console.log(isPalindrome("Hello")); 


module.exports = isPalindrome;
