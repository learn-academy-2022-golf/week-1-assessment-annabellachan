// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:
    // create a function called produce
    // set up 2 paraments (food1, food2)
    // Use conditional statement that assess 2 strings
        // use length built in method to determine the amount of characters in the string
        // if food1 char > food2 char
            // return food1 
        // if food1 char < food2 char
            // return food2  
        //  end loop with error  

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"
// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

const produce = (food1, food2) => {
    if(food1.length > food2.length){
        return food1
    } else if(food1.length < food2.length){
        return food2
    } else
        return "error"
}
console.log(produce(fruit1, fruit2)) // banana
console.log(produce(fruit3, fruit4)) // cherry
//  


// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:
    // create a function called (howHot)
    // set up 1 parameter (degrees)
    // Use a conditional that will evaluate 2 strings
        // if degrees is 42
            // return 42 is below boiling point
        // if degrees is 350
            // return 350 is above boiling point
        //  if degrees is 212
            // return 212 is at boiling point
        //  end loop with "error" if different number is prompt

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"
const howHot = (degrees) => {
    if(degrees <= 42){
        return `${temp1} is below boiling point`
    }else if(degrees >= 350){
        return `${temp2} is above boiling point`
    }else if(degrees === 212){
        return `${temp3} is at boiling point`
    }else 
        return "error" 
}
console.log(howHot(42)) // "42 is below boiling point"
console.log(howHot(350))// "350 is above boiling point"
console.log(howHot(212))// "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
    // Use accessor to join the 2 arrays together (.concat())
    // Use .length to return the output with the length of the new single array


const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
const concatArrays = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(concatArrays.length) // 9


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
    // input = Golf 2022
    // output = 2022 floG
    // create a variable called reverseString
        // use accessor .split('') to split the string into an array of letters
        // use accessor .reverse() to reverse the letters
        // use accessor .join('') to join the letters back together and covert the array back into a string

const currentCohort = "Golf 2022"

// Expected output: "2202 floG"

const reverseString = currentCohort.split('').reverse().join('')
console.log(reverseString) // "2202 floG"


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
    // create two variables called last42Index and last10Index
    // use accessor .lastIndexof() to return specifc output and save it as a variable
         //  from myNumbers return 42 at index 7
        //   from myNumbers return 10 at index 8

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// // Expected output: 7

const givenValue2 = 10
// // Expected output: 8

const last42Index = myNumbers.lastIndexOf(givenValue1)
const last10Index = myNumbers.lastIndexOf(givenValue2)
console.log(last42Index) // 7
console.log(last10Index) // 8


// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:
    // create two variables called sdWeather1 and sdWeather2 
    //  use accessor .sort((a.b) => b-a) to reverse and sort the array in descending order
        // from sdWeather1 return 82, 80, 79, 77, 76, 73, 72
        // from sdWeather2 return 68, 67, 66, 66, 62, 59, 59

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]


const sdWeather1 = sanDiegoSummerTemperatures.sort((a,b) => b-a)
const sdWeather2 = sanDiegoWinterTemperatures.sort((a,b) => b-a)

console.log(sdWeather1) // 82, 80, 79, 77, 76, 73, 72
console.log(sdWeather2) // 68, 67, 66, 66, 62, 59, 59


