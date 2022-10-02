// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    for (i = 1, j = str.length; i != j; i++, j--) {  
        let front = i - 1;
        let back = j - 1;      
        if (str.charAt(front) != str.charAt(back)) {
            return false
        }
        
        // Prevent infinite loop and determine when we can stop checking
        // If j is "one away" from j, we've compared all values:
        if (i + 1 == j) {
            break;
        }
    }

    return true
}

module.exports = palindrome;