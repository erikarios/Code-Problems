/* The Coupon Code

Write a function called checkCoupon which verifies that a coupon code is valid and not expired. A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR" */

// We are given four string parameters, two of the strings are numbers and two of the strings are dates

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
  };

/*Test Cases   
checkCoupon('123','123','September 5, 2014','October 1, 2014') => true
checkCoupon('123a','123','September 5, 2014','October 1, 2014') => false
*/