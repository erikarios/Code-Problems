/* Messi goals function

Messi is a soccer player with goals in three leagues: LaLiga, Copa del Rey, Champions
Complete the function to return his total number of goals in all three leagues */

// The parameter is three different numbers that relates to the goals in that league 
// We just want to return them added up

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
};

/*Test Cases   
goals(43, 10, 5) => Output: 58
*/