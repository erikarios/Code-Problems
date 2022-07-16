/* Keep up the hoop

Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him. Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message. If Alex gets 10 or more hoops, return the string "Great, now move on to tricks". If he doesn't get 10 hoops, return the string "Keep at it until you get it".*/

// The parameter is an integer
// We need to return a one of two strings depending on the number of times the hoop goes around
// The conditional (ternary) operator is represented by the question mark (?)
//The condtion that we are trying to figure out is if n is equal to or greater than 10


const hoopCount = n => (n >= 10) ? "Great, now move on to tricks" : "Keep at it until you get it"

/*Test Cases   
hoopCount(3) => Output: "Keep at it until you get it"
hoopCount(11) => Output: "Great, now move on to tricks"
*/