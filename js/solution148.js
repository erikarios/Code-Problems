/* Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. */

// The parameters is a string containing numbers which are separated by space
// We need to return the highest and lowest interger from the string
// We can use the .split() method to turn the string into an array and then iterate through the array
// The Math.min() function returns the smallest value of the numbers 
// The Math.max() function returns the biggest value of the numbers
// Spread syntax allows an iterable such as an array expression to be expanded in places where zero or more arguments (for function calls) or elements (for array literal) are expected


function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
};

/*Test Cases   
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4") => "42 -9"
highAndLow("1 2 3") => "3 1"
*/