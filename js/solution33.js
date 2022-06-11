/*Clock

Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds. 0*/

//The parameter is one number, which is n
//Convert hours, mins, and seconds to miliseconds and return the total

function past(h, m, s){
    return ((h * 3600000) + (m * 60000) + (s * 1000))
  }

/*Test Cases   
past(0,1,1) => Output: 61000
past(1,0,1) => Output: 3601000
*/