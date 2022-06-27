/*Calculate BMI

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese".*/

// There are two parameters, weight and height
// The first step is to calculate the bmi. To do that I set a new variable that will calculate the total and it can be easily used in the conditional 
// Then a conditional expression is used to determined what output would be returned

function bmi (weight, height) {
    let total = (weight / height**2) 

    if (total <= 18.5){
        return "Underweight"
    }else if (total <= 25.0){
        return "Normal"
    }else if (total <= 30.0){
        return "Overweight"
    }else {
        return "Obese"
    }
}

/*Test Cases   
bmi(50, 1.80) => Output: "Underweight"
bmi(80, 1.80 => Output: "Normal"
*/