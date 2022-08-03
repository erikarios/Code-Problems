/* 
Cat years, Dog years

I have a cat and a dog. I got them at the same time as kitten/puppy. That was humanYears years ago. Return their respective ages now as [humanYears,catYears,dogYears] 

NOTES:
humanYears >= 1
humanYears are whole numbers only

Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */

// The parameters is an integer that represents years
// We want to return an array of three integers that will represent human years, cat years, and dog years
// We know that human years will always be a constant. We also know that for in year one and year two the dog and cat age the same. The third year and beyond is where the difference occurs. 
// We can use a conditional to set up the years. For the third year, I set it up where you multiply the age of the cat and dog after the second year. I also made sure to subtract two from the human years since the first two years is already set up in the conditional and the years are not uniform in the first two years.
// Return the array representing the years


var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0;

    if(humanYears === 1){
        catYears = 15;
        dogYears = 15;
    }
    else if(humanYears === 2){
        catYears = 15 + 9;
        dogYears = 15 + 9;
    }
    else if(humanYears > 2){
        catYears = (24) + (4 * (humanYears - 2));
        dogYears = (24) + (5 * (humanYears - 2));
    }
   
    return [humanYears, catYears, dogYears];
};

/*Test Cases   
humanYearsCatYearsDogYears(1) => Output: [1,15,15]
humanYearsCatYearsDogYears(2) => Output: [2,24,24]
humanYearsCatYearsDogYears(10) => Output: [10,56,64]
*/