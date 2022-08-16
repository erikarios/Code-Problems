/* A wolf in sheep's clothing

Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them. Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array. If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue. Note: there will always be exactly one wolf in the array. */

// The parameter will be an array of strings with the words sheep and one wolf
// We need to return a string of either "Pls go away and stop eating my sheep" or "Oi! Sheep number N! You are about to be eaten by a wolf!" The string we return is based on the location of the word "wolf" in the array. If it's in the beginning of the array then you return please go away. Any other postion we need to the postion of where the "wolf" is in the array
// We know that we will always return "Pls go away and stop eating my sheep" if "wolf" is first in the array, which is index 0
// We first want to reverse the queue because the problem tells us that the front of the queue is at the end. We can do that by using the reverse method
// indexOf method returns the index at which a given element can be found in the array

function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf')
  
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
};


/*Test Cases   
warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]) => Output: "Oi! Sheep number 2! You are about to be eaten by a wolf!"

warnTheSheep(["sheep", "sheep", "wolf"]) => Output: "Pls go away and stop eating my sheep"
*/