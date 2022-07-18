/* Check for factor

This function should test if the factor is a factor of base. Return true if it is a factor or false if it is not. Factors are numbers you can multiply together to get another number. 2 and 3 are factors of 6 because: 2 * 3 = 6. Note: base is a non-negative number, factor is a positive number. */

// The parameter is two integers, factor and base
// We need to find out if the factor is a factor of the base
// We return true if it is, false if not
// Use the mod operator (%) to check if there is a remainder when we divide the base by the factor

const checkForFactor = (base, factor) => base % factor === 0 

/*Test Cases   
checkForFactor(10,2 => Output: true 
checkForFactor(63,7) => Output: true
*/