/* Odd-Even String Sort

Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated 
Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces */

// The parameter is a string
// We want to return a single string with two words, the first word being made up of only even index elements and the second word made up of odd index elements
// We first need to separate the even and odd elements. We can set up two empty arrays using literal notation 
// Using a condtional we can check if the element is even or odd
// We push the even ones to the even array and the odd ones to the odd array
// We then concatenate the arrays together with the space separating the even and odd words

function sortMyString(S) {

even = []
odd = []    

for (let i= 0; i < S.length; i++){
    if([i] % 2 == 0){
        even += S[i]
    }else{
        odd += S[i]
    }
}
    return even + ' ' + odd
};

/*Test Cases   
sortMyString("CodeWars") => "CdWr oeas"
sortMyString("YCOLUE'VREER") => "YOU'RE CLEVER"
*/