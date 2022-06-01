/*Well of Ideas 

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.*/

//The parameter will be an array with the strings of either 'good' or 'bad'
//Need to figure out how many good ideas there are
//.filter() is an array method that creats a new array. It is used to filter out how many 'good' ideas there are. 
//.length will take count of the 'good' ideas and all this will be stored in a variable called good count
//If good_count is less than 1 than 'Fail' is returned. If good_count is one or two 'Publish' is returned.
//A conditional (ternary) operator is also used. If good_count is two or more than 'I smell a series' is returned.


const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' : 
           good_count < 3 ? 'Publish!' : 'I smell a series!';
}

/*Test Cases    
well(['bad', 'bad', 'bad']) => Output: 'Fail'
well(['good','bad', 'good']) => Output: 'Publish!'
*/