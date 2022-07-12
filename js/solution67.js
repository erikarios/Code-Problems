/* Twice as old

Your function takes two arguments: current father's age (years) and current age of his son (years). Calculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). */

// The parameter is two integers
// We want the function to return an integer that tells us question many years ago or in how many year will the dad's age be exactly twice as much as the son's current age
//Another way to think of this question is "When will the son be the age his father was when he was born?" Becuase at that time his the father was twice his age.
//So we get the Father's age at his birth (fathersAge - sonsAge)
//Then we get the years since that birth (sonsAge) and subtract it from the above  simplified to (fathersAge - sonsAge*2)
// We wrap that subtraction in a Math.abs to give us an absolute number since the number may be negative


function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - (2 * sonYearsOld))
};


/*Test Cases   
twiceAsOld(36,7) => Output: 22  
    - 22 years from now, the father will be 58 years old and his son will be 29 years old

twiceAsOld(55,30) => Output: 5
    - 5 years ago, the father was 50 years old and his son was 25 years old
*/