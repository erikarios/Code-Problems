/* Leet Code - Longest Palindromic Subsequence

Given a string s, find the longest palindromic subsequence's length in s. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

Note:
1 <= s.length <= 1000
s consists only of lowercase English letters.
*/

// The parameter is a string of letters
// We want to return the longest subsequence palindrome within the string that is given, so a sequence that reads the same backward as forward
// Create a 2d array and fill it woth 0s and store it in the variable “dp”
// Then loop thru the 2d array and put a 1 in the positions [i][i]. This is representing a single character
// Each number that is going into the array represents the length of a vaild palindrome
// After we have found all the combinations that is a vaild palindrome, all that is left is to find the largest number

// Time complexity: O(n2)
// Space complexity: O(n2)

var longestPalindromeSubseq = function(s) {
    const dp = [...Array(s.length)].map(() => Array(s.length).fill(0))

    for(let i = 0; i < s.length; i++) {
        dp[i][i] = 1
    }

    for(let i = 1; i < s.length; i++) {
        for(let j = 0; j < s.length; j++){
            if(j+i < s.length){
                // If the end letter and start letter are the same add 2 to the value in the bottom left diagonal. This value is a potential palindrome. If the letters are not equal, set the current value to the previous highest palindrome subsequence
                dp[j][j+i] = s[j] === s[j + i] 
                    ? dp[j+1][j+i-1] + 2
                    : Math.max(dp[j][j+i-1], dp[j+1][i+j])
            }
        }
    }

    return dp[0][s.length-1]
};

/*Test Cases   
longest("bbbab") => 4
  Explanation: One possible longest palindromic subsequence is "bbbb".

longest("cbbd") => 2
  Explanation: One possible longest palindromic subsequence is "bb".
*/