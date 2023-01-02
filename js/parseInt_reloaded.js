/* parseInt() reloaded

In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

Examples:
  "one" => 1
  "twenty" => 20
  "two hundred forty-six" => 246
  "seven hundred eighty-three thousand nine hundred and nineteen" => 783919

Additional Notes:
  The minimum number is "zero" (inclusively)
  The maximum number, which must be supported is 1 million (inclusively)
  The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
  All tested numbers are valid, you don't need to validate them
*/

// The parameter is a string of words that represents a numerical value
// We need to return that string into integers
// Create an two objects, one with numbers 0-90 and the other with 100, 1000, 1000000
// Use the reduce method to iterate through the array of the words
// Return the integer

  const words = {
    "ninety": 90,    "nineteen": 19,    "nine": 9,
    "eighty": 80,    "eighteen": 18,    "eight": 8,
    "seventy": 70,   "seventeen": 17,   "seven": 7,
    "sixty": 60,     "sixteen": 16,     "six": 6,
    "fifty": 50,     "fifteen": 15,     "five": 5,
    "forty": 40,     "fourteen": 14,    "four": 4,
    "thirty": 30,    "thirteen": 13,    "three": 3,
    "twenty": 20,    "twelve": 12,      "two": 2,
    "ten": 10,       "eleven": 11,      "one": 1,
                                        "zero": 0
  };

  const mult = { "hundred":100, "thousand":1000, "million": 1000000 };

  function parseInt(str) {
    return str.split(/ |-/).reduce(function(value, word) {
      if (words[word]) value += words[word];
      if (mult[word]) value += mult[word] * (value % mult[word]) - (value % mult[word]);
      return value;
    },0);
  };

/*Test Cases  
parseInt('one') => 1
parseInt('twenty') => 20
parseInt('two hundred forty-six') => 246
*/