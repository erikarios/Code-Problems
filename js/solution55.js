/* Rock Paper Scissors!

Let's play! You have to return which player won! In case of a draw return Draw! */

// There are two parameters which will be either "scissors", "paper", or "rock" 
// A conditional is used to with the first condtion being if p1 and p2 are equal to each other then the output would be "Draw!"
// We set up all three conditions in which p1 would win. If any of them are met then, "Player 1 won" will be returned
// If none of those condtions are meet then, "Player 2 won" will be returned


const rps = (p1, p2) => {
    if (p1 == p2){
      return "Draw!" 
    }else if ((p1 == "scissors" && p2 == "paper") || 
              (p1 == "paper" && p2 == "rock") || 
              (p1 == "rock" && p2 == "scissors") ){
      return "Player 1 won!"
    }else { 
        return "Player 2 won!"
    }
};

/*Test Cases   
rps("scissors", "rock") => Output: "Player 2 won!"
rps("scissors", "paper") => Output: "Player 1 won!"
*/