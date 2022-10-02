/* Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. */

// There are two parameters. The first is an array containing integers and the other is a single number which represents how many integers we return
// We need to return only the even numbers from the end of the array
// We need to iterate through the array and filter out the even numbers
// We can figure out which numbers are even by using the modulus operator
// We can use the slice method to slice from the end of the array to the parameter that we were given

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
};

/*Test Cases   
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4") => [4, 6, 8]
highAndLow("1 2 3") => [-8, 26]
*/