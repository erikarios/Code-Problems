/* Row Weights

Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task - Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2. Notes - array size is at least 1 and all numbers will be positive.*/

// The parameter is an array with positive integers. The array will never be empty
// We want to return a new array compromised of two integers, the combined total of team 1 and the combine total of team 2. Team one will be compromised of the first, third, and so one elements from the given parameter. Team 2 will be compromised of the second, forth, and so on elements from the given parameter.
// For example rowWeights([13, 27, 49])  ==>  return [62, 27]. The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.
// We need to figure out which elements goes into which team. We can check the index and use modulus to figure out if the index is even or odd. 
// We can add the totals for each team each time we iterate through the array
// We can return the totals 


function rowWeights(arr) {
    let team1 = 0;
    let team2 = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        team1 += arr[i];
      } else {
        team2 += arr[i];
      }
    }
    return [team1, team2];
};

/*Test Cases   
rowWeights([13, 27, 49]) => [62, 27]
rowWeights([50, 60, 70, 80]), => [120, 140]
rowWeights([80]), => [80,0]
rowWeights([0]) => [0,0])
rowWeights([100,51,50,100]) => [150,151])
*/