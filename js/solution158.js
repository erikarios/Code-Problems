/* Remove anchor from URL

Complete the function/method so that it returns the url with anything after the anchor (#) removed. */

// The parameter is a string that is a url
// We need to return the same string but remove anything that is after the # character. If there is no # character then we need to return the same string unchanged
// We can use the .split() method to turn the string into array of strings and use the # character as the separator. Splitting the string with the # will isolate the part of the URL that we want
// Since the .split() method is being separated by a specific character, if that character does not exist in the string than it leaves the string unchanged. 
// Last we can grab the zero index which will be the first element in the array, giving us the domain name


function removeUrlAnchor(url){
    return url.split('#')[0]
};

/*Test Cases   
removeUrlAnchor('www.codewars.com#about') => 'www.codewars.com'
removeUrlAnchor('www.codewars.com/katas/?page=1#about') => 'www.codewars.com/katas/?page=1'
removeUrlAnchor('www.codewars.com/katas/') => 'www.codewars.com/katas/'
*/