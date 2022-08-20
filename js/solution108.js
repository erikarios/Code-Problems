/* Gravity Flip

Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity. There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity. 

+---+                                       +---+
|   |                                       |   |
+---+                                       +---+
+---++---+     +---+              +---++---++---+
|   ||   |     |   |   -->        |   ||   ||   |
+---++---+     +---+              +---++---++---+
+---++---++---++---+         +---++---++---++---+
|   ||   ||   ||   |         |   ||   ||   ||   |
+---++---++---++---+         +---++---++---++---+

Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity
*/

// There are two parameters: a string that  'R' or 'L" that will indicate the direction in which the box was moved. The second parameter is an array of integers that indicated how many cubes there are in each column. The array needs to be returned in either ascending or descending order depending on the direction 
// The parameter d=direction and a=array 
// We want to return an array with integers that indicate how many cubes are in each column after the box has moved directions
// Looking at the example above initally the box had a direction of left and if you count number of cubes per column you get [3, 2, 1, 2]. You can see that when the gravity switched off the box moved to the right side, you get a count of [1, 2, 2, 3]cubes per column.
// If the box is pulled to the right, we need to return the array in ascending order if pulled to the left, we need to return the array in descending order
//.sort((a,b) => a-b), will sort the elements in the array and return the values in ascending order
//.sort((a,b) => b-a), will sort the elements in the array and return the values in descending order


const flip = (d, a) => d === 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a); 

  
/*Test Cases   
flip('R', [3, 2, 1, 2]) => Output: [1, 2, 2, 3]
flip('L', [1, 4, 5, 3, 5]) => Output: [5, 5, 4, 3, 1]
*/

