/*Total amount of points

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection. Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point

Notes:
there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4' */

// first loop through the strings given in the games array to get the scores
// if the 0th index of games[i] > 2nd index of games[i] we have to add 3 to the score
//else if they are equal we need to add 1 to the score. 
// Last, return the sum of the score 

function points(games) {
    let sum=0;
    for (let i=0; i<games.length; ++i)
    {
      if (games[i][0]>games[i][2])
        sum+=3;
      else if (games[i][0]==games[i][2])
        sum+=1;
    }
    return sum;
}

/*Test Cases   
points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) => Output: 30
points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])  => Output: 10
*/