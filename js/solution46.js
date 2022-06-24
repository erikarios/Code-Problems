/*Is he gonna survive?

A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of dragons! Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive? Return True if yes, False otherwise */

//There are two parameters, number of bullets and the number of dragons
// bulletsNeeded is a new variable that was created. It takes into account the info that each dragon needs two bullets to be defeated. This was done for clearer readability
//A conditional is set that states if the number of bullets are more or equal to the number of bulletsNeeded, return true. Otherwise return false

function hero(bullets, dragons){
    let bulletsNeeded = (dragons * 2)
    if (bullets >= bulletsNeeded ){
      return true
    }else{
      return false
    }
}

/*Test Cases   
hero(10, 5) => Output: true
hero(7, 4) => Output: false
*/