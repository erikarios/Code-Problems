/* What's the real floor?

Write a function that given a floor in the american system returns the floor in the european system. With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them. Basements (negatives) stay the same as the universal level. */

// The parameter will be an integer
// We need to return an integer the represents the correct floor number according to the european system
// We can use a condtional to set up the correct floor numbers
// There are some condtions that need to be taken into an account: basement floor is not affected, floors 1-13 need to all be brought down by 1, and since the 13th floor is being omitted floors 13 and above need to be brought down by 2

function getRealFloor(n) {
    if (n > 0 && n < 13){
      return (n-1)
    }else if (n > 13){
      return (n-2)
    }else {
      return n
    }
};;

/*Test Cases   
getRealFloor(1) => Output: 0
getRealFloor(5) => Output: 4
getRealFloor(15) => Output: 13
*/