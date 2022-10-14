/* Extract the domain name from a URL

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string */

// We are given a parameters of a url that is passed in as a string 
// We need to isolate a string of the domain name
// The .replace() method can be used to isolate the pieces of the strings that we want. We can replace the beginning of the url with nothing. So then we are left with the domain name and everything else that comes after it
// Using the .split() method we can split the string by the . and end up with an array of strings. Splitting the string with the dot will isolate the domain name
// Last we can grab the zero index which will be the first element in the array, giving us the domain name

function domainName(url){
    return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0]
};

/*Test Cases   
domainName("http://google.com") => "google"
domainName("http://google.co.jp") => "google"
domainName("http://github.com/carbonfive/raygun") => "github"
domainName("https://youtube.com") => "youtube"
*/