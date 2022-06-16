/*Transportation on vacation

You will need a rental car in order for you to get around in your vacation. Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total. Write a code that gives out the total amount for different days(d).*/

//The parameter is the number of days
//Create a variable that determines the total cost
//A conditional is then used to figure out the discount you get based on the number of days you're renting the car

function rentalCarCost(days) {
    const costPerDay = 40
    let totalCost = costPerDay * days
    
    if (days >= 7) {
        totalCost -= 50
    }
    else if (days >= 3) {
        totalCost -= 20
    }
    return totalCost
}
  
/*Test Cases   
rentalCarCost(2) => Output: 80
rentalCarCost(3) => Output: 100
rentalCarCost(6) => Output: 220
*/