/*Keep Hydrated!

Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling. Given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.*/


//The parameter is the a number
//time divided bt 0.5 will determine how many litres to drink
//Math.floor() will round down the number to the nearest whole integer 


function litres(time) {
    return Math.floor(time * 0.5);
  }

/*Test Cases    
litres(3) => Output: 1
litres(6.7) => Output: 3
*/