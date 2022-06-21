/*Opposites Attract

Timmy & Sarah think they are in love. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't*/


//Since one flower needs to have an even number of petals the remainder operator can be used to see if the number of petals is divisible by two, which would make it an even number
//The strict inequality operator (!==) is used to check whether flower1 is not the equal to flower2
//If they are not the same, true will be returned


function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}

/*Test Cases   
lovefunc(1,4) => Output: true
lovefunc(2,2) => Output: false
*/