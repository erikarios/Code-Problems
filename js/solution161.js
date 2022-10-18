/* Vowel Count

Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces. */

// The parameter is a string consisting of lowercase letters or spaces
// We need to return an integer that represents how many vowels are in the string
// We need iterate through the string to look for the vowels
// We can create a variable of count and set that to zero. We can later add to the count as we go through the string
// We can created an array of the vowels to call back
// Return the count at the end 

function getCount(str) {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of str){
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
};

/*Test Cases   
getCount("abracadabra") => 5
*/