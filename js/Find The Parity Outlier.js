/* Find The Parity Outlier

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N
*/

// The parameter is an array containing at least three integers. The array will be contain either all odd or even integers, except for one integer. 
// We need to return the the one integer that doesn't fit in the array
// Using the filter method we can create an even array and an odd array
// Use modulus to see if the number is divisible by two or not
// Then we check the length of the even array. If the even array has only one number than we know that it is the outlier and we return the number in the even array. If not then we return the number in the odd array. Use the bracket notation to grab the number in the array, which is element 0

function findOutlier(int){
  let even = int.filter(num => num % 2 == 0)
  let odd = int.filter(num => num % 2 !== 0) 
  return even.length === 1 ? even[0] : odd[0];
};

/*Test Cases   
findOutlier([0, 1, 2]) => 1
findOutlier([1, 2, 3]) => 2
findOutlier([2,6,8,10,3]) => 3
findOutlier([0,0,3,0,0]) => 3
findOutlier([1,1,0,1,1]) => 0
*/