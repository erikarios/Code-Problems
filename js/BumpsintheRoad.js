/* Bumps in the Road

Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally. Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead */

// The parameter is a string made of up of n and _
// We need to return a string of either "Woohoo" or "Car Dead" depending on the number of bumps(n) there are in the given argument 
// Need to iterate through the string to count the number of bumps
// .split() method that will turn the string into an array
// Use the .filter() method to filter out the bumps('n') 
//.length will take count of the 'n' in the array
// A conditional (ternary) operator is used. If good_count is two or more than 'I smell a series' is returned.

// function bump(x){
//     const count = x.split('').filter(x => x == 'n').length
//     return count <= 15 ? 'Woohoo!' : 'Car Dead'
// };

const bump = x => x.split('').filter(e => e === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';


/*Test Cases   
bump("n") => "Woohoo!"
bump("__nn_nnnn__n_n___n____nn__nnn") => "Woohoo!"
bump("nnn_n__n_n___nnnnn___n__nnn__") => "Woohoo!"
bump("_nnnnnnn_n__n______nn__nn_nnn") => "Car Dead"
bump("______n___n_") => "Woohoo!"
*/