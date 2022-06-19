/*If you can't sleep, just count sheep!!

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.*/

//An empty string is set up
//A for loop is used and will start with the number 1. It will go up to the num parameter that is given 
//Each time it goes through the for loop it will add each number (+=) to the empty string. Template literals are used 

let countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
} 

/*Test Cases   
countSheep(1) => Output: "1 sheep..."
countSheep(3) => Output: "1 sheep...2 sheep...3 sheep..."
*/