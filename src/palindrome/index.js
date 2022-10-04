function palindrome(str) {
    loopCounter = 0
    i = 1
    j = str.length

    while (loopCounter < str.length) {
        let front = i - 1;
        let back = j - 1;

        if (str.charAt(front) != str.charAt(back)) {
            return false
        }        
        
        // If i is "one away" from j, we've compared all values:
        if (i + 1 == j) {
            break;
        }

        i++
        j--
        loopCounter++
    }

    return true
}

module.exports = palindrome;