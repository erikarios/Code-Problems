/* String array duplicates

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces.
*/

// The parameter is an array of words
// We need to return the same array without any consecutive duplicate letters. The words will be lowercase and there will be no spaces
// Use map to create a new array
// Using split we can turn the words into an array of individual letters 
// We need to compare the letters to see if they are consecutive duplicates
// Using filter we can look at the element (each letter), the index, and the array
// We check to see if the letter is not equal to the the letter before
// Using join we can join the words back together and return an array 

function removeDupes(arr){
    return arr.map(
      word => word.split('').filter((l,i,a) => l != a[i-1] ).join('')
    )
};

/*Test Cases   
removeDupes(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]) => ['codewars','picaniny','hubububo']
removeDupes(["putteellinen","keenness"]) => ['putelinen','kenes']
removeDupes(["kelless","voorraaddoosspullen","achcha"]) => ['keles','voradospulen','achcha']
removeDupes(["adanac","soonness","toolless","ppellee"]) => ['adanac','sones','toles','pele']
*/