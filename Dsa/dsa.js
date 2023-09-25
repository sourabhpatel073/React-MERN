// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

var maxVowels = function(s, k) {
    let count = 0;
   let max = 0;

   // Handle the count for the first window
   for(let i = 0; i < k; i++) {
       if(s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
           count++;
       }
   }
   max = count; // Set the max for the initial window

   for(let i = k; i < s.length; i++) {
       // If the new character is a vowel, increment count
       if(s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
           count++;
       }

       // If the character exiting the window is a vowel, decrement count
       if(s[i-k] == "a" || s[i-k] == "e" || s[i-k] == "i" || s[i-k] == "o" || s[i-k] == "u") {
           count--;
       }

       // Update max after adjusting count for every window
       if(count > max) {
           max = count;
       }
   }

   return max;
};