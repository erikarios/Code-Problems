/*Area or Perimeter

You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. If it is a rectangle, return its perimeter. Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle. */

// The parameters are l and w
//The conditional (ternary) operator is represented by the question mark (?)
//The condtion that we are trying to figure out is if l is equal
//If the condition is true it will give you the area , however if it is false it will give you the perimeter
// Note that area is l * w and perimeter is adding all the sides (l + l + w + w)

const areaOrPerimeter = (l , w) => (l === w) ? l * w : (l + l + w + w)

/*Test Cases   
areaOrPerimeter(4 , 4) => Output: 16
areaOrPerimeter(6 , 10) => Output: 32
*/