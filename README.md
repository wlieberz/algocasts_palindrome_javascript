# About

This repo contains my solution for a palindrome programming exercise.

There are many variations of this type of exercise, with varying levels of
complexity.

This particular variation comes from the Udemy course [The Coding Inteview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/).

The companion repo for the course can be found here:
[StephenGrider/AlgoCasts](https://github.com/StephenGrider/AlgoCasts)

This solution is in JavaScript.

# Problem Description

>--- Directions:
>
>Given a string, return true if the string is a palindrome
>or false if it is not.  Palindromes are strings that
>form the same word if it is reversed. 
>
> *Do* include spaces and punctuation in determining if the string is a palindrome.
>
>--- Examples:
>
>   palindrome("abba") === true
>
>   palindrome("abcdefg") === false

# Running Tests

Prerequisite: you need to have [jest](https://jestjs.io/) installed.

In order to run the **unit-tests**:

```sh
cd src/
jest palindrome/test.js
```
**Expected output:**
```sh
 PASS  palindrome/test.js
  ✓ palindrome function is defined (1 ms)
  ✓ "aba" is a palindrome
  ✓ " aba" is not a palindrome
  ✓ "aba " is not a palindrome
  ✓ "greetings" is not a palindrome
  ✓ "1000000001" a palindrome
  ✓ "Fish hsif" is not a palindrome (4 ms)
  ✓ "pennep" a palindrome

Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
```