/* Who likes it?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item
*/

// The parameter is an array
// We want to return the names in the array + "likes this" or "no one likes this" if the array is empty 
// Conditionals need to be used and 
// We can use template literals to create the format of the string we return

function likes(names) {
    if(names.length === 0) return "no one likes this";
    if(names.length === 1) return `${names[0]} likes this`;
    if(names.length === 2) return `${names[0]} and ${names[1]} like this`;
    if(names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

/*Test Cases   
likes([]) => 'no one likes this'
likes(['Peter']) => 'Peter likes this'
likes(['Jacob', 'Alex']) => 'Jacob and Alex like this'
likes(['Alex', 'Jacob', 'Mark', 'Max']) => 'Alex, Jacob and 2 others like this'
*/