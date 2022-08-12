/* Squash the bugs

Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed. The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated */

// The parameter will be an array containing 
// We need to return an array containing all of the strings in the input array except those that match strings in geese
// We can use the filter method to get a subset of the original array based on specific criteria. 
// includes determines whether an array includes a certain value 
// We want to pull out ONLY the elements that are not included in the geese array

function gooseFilter (birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const result = birds.filter((elm) => !geese.includes(elm))
    return(result)
};

gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])

/*Test Cases   
gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]) => Output: ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
*/