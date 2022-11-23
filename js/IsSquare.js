/* You're a square!

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Given an integral number, determine if it's a square number:
    In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, so don't worry about that in dynamic typed languages.
*/

// The parameter is an integer
// We need to figure out if the number given is a square number and return true if it is and false if not
// Using Math.sqrt we can figure out if the interger is the square root of the arugment given
// Then using remainder operator we can see if the number is a whole number. For example if you take the Math.sqrt(4) the answer would be 2. Then using the remainder operator we can see that 1 goes into 2, twice so there is zero remainder. If there is a remainder, false will be returned.


function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
};

/*Test Cases   
isSquare(-1) => false
isSquare( 0) => true
isSquare( 3) => false
isSquare( 4) => true
isSquare( 25) => true
isSquare( 26) => false
*/