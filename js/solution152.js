/* Credit Card Mask

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#' */

// The parameters is a string containing either letters or numbers
// We need to replace all the characters with '#' excluding the last four characters
// We can use the splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// We can use the replace() method to replace all the characters with #.
// We can join the replaced characters with the last four unchanged characters

function maskify(cc){
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
};

/*Test Cases   
maskify('4556364607935616') => '############5616'
maskify('11111') => '#1111'
maskify("What was the name of your first pet?") => "Skippy" --> "##ippy"
*/