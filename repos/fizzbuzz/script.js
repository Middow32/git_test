// Asks for user input
var number = prompt('Enter your number to begin Fizzbuzz sequence.');

function fizzbuzz(number) {    
    var numlist = '';  //string for the FizzBuzz sequence.  

    //Generates the list of numbers.
    for (var i = 1; i <= number; i++) {

        // Is divisible by 3 and 5?
        if (i%5 == 0 && i%3 == 0) {
            numlist += "FizzBuzz, "
        }
        // Is divisible by 3 but not 5?
        else if (i%3 == 0 && i%5 != 0) {
            numlist += "Fizz, ";
        }
        // Is divisible by 5 but not 3?
        else if (i%5 == 0 && i%3 != 0) {
            numlist += "Buzz, ";
        }
        // Not divisible by 3 or 5
        else numlist += i + ", ";
    }
    //slices off the last comma in the string
    numlist = numlist.substring(0,numlist.length-2);

    //returns the FizzBuzz sequence
    return numlist;
}

// Log and Print the FizzBuzz sequence
console.log(fizzbuzz(number));
document.write(fizzbuzz(number));