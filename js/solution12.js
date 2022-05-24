/*Find the smallest integer in the array
Given an array of integers your solution should find the smallest integer. For the purpose of this kata, that the supplied array will not be empty.
*/

//.sort() method sorts the elements in an array and returns the sorted array
// a - b will sort negative, zero, and positive values in ascending order. When the .sort(a,b) method compares two values, it sends the values to our compare function and sorts the values according to the returned value. If the result is negative, a is sorted before b. If the result is positive, b is sorted before a. If the result is 0, nothing changes.
//args[0] is taking the element at index 0, which is the smallest number

class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort((a, b) => a - b)
       return args[0] 
    }
}


/*Test Case
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
*/