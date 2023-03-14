/* Leetcode - Koko Eating Bananas

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours. Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour. Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return. Return the minimum integer k such that she can eat all the bananas within h hours.

Constraints:
    1 <= piles.length <= 104
    piles.length <= h <= 109
    1 <= piles[i] <= 109
*/

// Start k with 1
// with the current k
// keep track of bananas left to eat as array
// create index variable for current pile
// create variable for current hour set to 0
// While currentHour < h
//   increment currentHour
//   subtract k from current pile
//      if current pile <= 0
//          increment pile index
//      if pile index === pile index
//           break loop
// if last element > 0
//  increment k, try again
// Otherwise, return k


var minEatingSpeed = function(piles, h) {
    let max = Math.max(...piles) // finding highest k
    let min = Math.floor(piles.length * Math.min(...piles)/h) // finding lowest k

    let result;
    while(min <= max){
        let mid = Math.floor((max + min)/2);
        let time = 0;
        
        for(let i = 0; i < piles.length; i++){
            time += Math.ceil(piles[i] / mid);
        }

        if(time <= h){
            result = mid;
            max = mid - 1;
        }
        else{
            min = mid + 1;
        }
    }
    return result;
};

// var minEatingSpeed = function(piles, h) {
//     let k = 1;
//     while(true){
//         const bananasLeft = [...piles]
//         pileIndex = 0;
//         currentH = 0;

//     while(currentH < h){
//         currentH++;
//         bananasLeft[pileIndex] -= k;
            
//         if(bananasLeft[pileIndex] <= 0)
//             pileIndex++

//         if(pileIndex === bananasLeft.length)
//             break;
//     }       
//     if(bananasLeft[bananasLeft.length-1] > 0)
//         k++
//     else{
//         return k;
//         }
//     }
// };

/*Test Cases   
  Example 1:
    Input: piles = [3,6,7,11], h = 8
    Output: 4
      hour = 1 [0,6,7,11]
      hour = 2 [0,2,7,11]
      hour = 3 [0,0,7,11]
      hour = 4 [0,0,3,11]
      hour = 5 [0,0,0,11]
      hour = 6 [0,0,0,7]
      hour = 7 [0,0,0,3]
      hour = 8 [0,0,0,0]

  Example 2:
    Input: piles = [30,11,23,4,20], h = 5
    Output: 30
      hour = 1 [0,11,23,4,20]
      hour = 2 [0,0,23,4,20]
      hour = 3 [0,0,0,4,20]
      hour = 4 [0,0,0,0,20]
      hour = 5 [0,0,0,0,0]

  Example 3:
    Input: piles = [30,11,23,4,20], h = 6
    Output: 23
      hour = 1 [7,11,23,4,20]
      hour = 2 [0,11,23,4,20]
      hour = 3 [0,0,23,4,20]
      hour = 4 [0,0,0,4,20]
      hour = 5 [0,0,0,0,20]
      hour = 6 [0,0,0,0,0]
*/