/* Find the capitals

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string. */

// The parameter is a single string that contains letters that are uppercase and lowercase
// We want to return an array containing an ordered list of the indexes that correspond to the capital letters in the string
// We need to iterate through the string to figure out which letters are uppercase. We can do so by using a for loop
// We can then use a condition to see if the element that we are looking through is equal to the same element in uppercase form
// We then push the corresponding index to the empty array and return the array

let capitals = function (word) {
    let arr = []
	for (let i=0; i < word.length; i++){
        if(word[i] === word[i].toUpperCase()){
            arr.push(i)
        }
    }
    console.log(arr)
};

/*Test Cases   
capitals('CodEWaRs') => [0,3,4,6]
capitals('MAngO') => [0,1,4]
*/