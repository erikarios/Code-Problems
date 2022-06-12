/*Clock

There was a test in your class and you passed it. You want to know if you're better than the average student in your class. You receive an array with your peers' test scores. Now calculate the average and compare your score! Return True if you're better, else False!*/

//classPoints is an array of numbers
//yourPoints is one score
//The goal is to return the one score if is bigger than the average
//To figure out the average score, you need to figure out the vaule of the combined scores and divide it by number of elementsadd .
// .reduce() method will take in each integer in the array
//acc is accumulator, the total value
//curr is the vaule of the current element being processed in the array
//.length grabs total number of elements in the array

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((acc, curr) => acc+curr, 0) / classPoints.length; 
}

/*Test Cases   
betterThanAverage([2, 3], 5) => Output: True
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) => Output: True
*/