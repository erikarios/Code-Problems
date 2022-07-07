/* Thinkful - Logic Drills: Traffic light

You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to. */

// The parameter is either going to be "green", "yellow", or "red" 
// A conditional expression is used to determined what output will be returned depending on the argument that was given


function updateLight (current) {
    if (current === "green"){
      return "yellow"
    } else if (current === "yellow"){
      return "red"
    } else{
      return "green"
    }
};

/*Test Cases   
updateLight("green") => Output: "yellow"
updateLight("yellow") => Output: "red"
*/