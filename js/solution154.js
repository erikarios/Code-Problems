/* Return substring instance count

Complete the solution so that it returns the number of times the search_text is found within the full_text. */

// There are two parameters. One is a string containing letters and the other is a string containing the characters we are looking for 
// We need to return a number that represents how many times that search text parameter is found in the full_text
// We can use the .split() method to turn the string into array and will look for the characters within the string

function solution(fullText, searchText){
    return fullText.split(searchText).length - 1;
};

/*Test Cases   
solution('abcdeb','b') => 2
solution('abc','b') => 1
solution('aa_bb_cc_dd_bb_e', 'bb') => 2
*/