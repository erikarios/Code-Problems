/* Terminal game move function

In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times. Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position */

// The parameter is two integers, position and roll
// We return the new postion by taking the position that we're starting at plus the roll times two

const move = (position, roll) => position + (roll * 2)

/*Test Cases   
move(0, 4) => Output: 8
move(3, 6) => Output: 15
*/