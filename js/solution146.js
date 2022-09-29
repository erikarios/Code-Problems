/* Coding Meetup

You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time. Your task is to return the number of JavaScript developers coming from Europe. If, there are no JavaScript developers from Europe then your function should return 0. Notes: The format of the strings will always be Europe and JavaScript. All data will always be valid and uniform. */

// The parameter is an array of objects
// We need to go through the array of objects and filter how many objects have the continent of Europe and the languge of Javascrip.
// .filter() - filters down to just the elements from the given array that pass the test implemented by the provided function

function countDevelopers(list) {
    return list.filter(x => x.continent == 'Europe' && x.language == 'JavaScript').length
};

/*Test Cases   
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

The output should be 1 in this example
*/