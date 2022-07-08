/* L1: Set Alarm

Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation. The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. */

// We need to return true if you need to set an alarm and false if you don’t have to set an alarm
// The only time you need to set an alarm is if you are employed and not on vacation.Everything else can return false
// The function will return the boolean value that statement evaluates to

function setAlarm(employed, vacation){
    return employed && !vacation;
};

/*Test Cases   
setAlarm(true, true) => Output: "false"
setAlarm(true, false) => Output: "true"
*/