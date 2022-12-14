/* Codewars - Pillars

There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
        number of pillars (≥ 1);
        distance between pillars (10 - 30 meters);
        width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
*/

// There are three parameters which are numbers 
// We need to return the distance between the first and last pillars without the width of the first and last pillar, so we know that's going to be minus 2
// Check if the number of pillars is 1, if it is then return 0
// Multiply the number of pilars minus 2, by the width, so we can get the length of all the pilars except for the first and the last one
// Need to multiply the dist by 100 to get it into centimeters
// The distance between the pillars is one less than the number of pillars, so minus 1

function pillars(numPill, dist, width) {
    if (numPill === 1) return 0;
    return ((numPill - 2) * width) + ((100 * dist) * (numPill-1)) 
};

/*Test Cases  
Example 1:
    Input: (1, 10, 10)
    Output: 0

Example 2:
    Input: (2, 20, 25)
    Output: 2000

Example 3:
    Input: (11, 15, 30)
    Output: 15270
*/