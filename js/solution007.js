/*The Wide-Mouthed frog!
The wide-mouth frog is particularly interested in the eating habits of other creatures.
Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.*/

//.toLowerCase() is needed so the paramater is treated the same whether it is uppercase or lowercase

function mouthSize(animal) {
    animal = animal.toLowerCase()
    if(animal === 'alligator'){
      return 'small'
    }else{
      return 'wide'
    }
  }