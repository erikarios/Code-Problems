/*Will you make it?

You realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true if it is possible and false if not.*/

//Comparison operators will return either true or false
//This will get the distance we can travel (mpg * fuelLeft) and compare it to the distance 
//The output will be either true or false

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (mpg * fuelLeft) >= distanceToPump
};  

/*Test Cases   
zeroFuel(50, 25, 2) => Output: True
zeroFuel(100, 50, 1) => Output: False
*/