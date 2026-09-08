console.log(`Hello, World!`);      // create a palindrome string
let str = "racecar";
let isPalindrome = str === str.split("").reverse().join("");
console.log(`Is "${str}" a palindrome? ${isPalindrome}`);