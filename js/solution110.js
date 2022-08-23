/* Surface Area and Volume of a Box

Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

// The parameters are three integers
// We want to return the area and the volume of a box. We need to return the values in an array 


function getSize(width, height, depth) {
    let volume = width * height * depth;
    let area = 2 * (height * width) + 2 * (height * depth) + 2 * (width * depth);
    return [area, volume];
  }

  
/*Test Cases   
getSize(4, 2, 6) => Output: [88, 48]
getSize(10, 10, 10) => Output: [600, 1000]
*/