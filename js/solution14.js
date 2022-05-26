/*Triple Trouble

Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter. You can expect all of the inputs to be the same length */

// A new string needs to be returned so I set let str = an empty string
// Next a for loop is used iterate through the three parameters
// i is set to 0 since we want to start at the first string index 
// the counter or conditionExpression is set to one.length. Note that can choose any parameter since they will all be the same length
// i is incremented by one each time until it is < the number of characters in the string, which is given by .length
// str += one[i]+two[i]+three[i] - will then add together letter that corresponds to the string index until the for loop is completed

function tripleTrouble(one, two, three){
    let str = ''
      for (let i=0; i < one.length; i++){
      str += one[i]+two[i]+three[i]  
    }
    return str
   }


/*Test Cases
tripleTrouble('cat', 'dog','zip') => Output:'cdzaoitgp'
tripleTrouble('aa', 'bb' , 'cc') => Output: 'abcabc'
*/