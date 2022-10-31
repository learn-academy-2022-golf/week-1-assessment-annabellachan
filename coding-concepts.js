// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 4
// b) Verify and explain: 5 - Using the mutator .push() changes the array with the value "indigo" to the end of the array. 
    // .push("indigo") is asking which index "indigo" will be placed at once it's pushed into the array.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: 10 - .length is asking for the number of elements in the array. 
    // although learn + 2022 = 9, spaces also count so the answer is 10.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: o - arrays are defined by [] and is indexed like strings so [4] is asking at index 4, what is the letter in the string. In this case, it would be "o"

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Ruby - It is asking in the langauges array what is at index 1. 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY SUNDAY
// b) Verify and explain: Error message: weekendDays.toUpperCase is not a function - The built in function .toUpperCase() cannot be used for an array. This built in function returns the calling string value and converts it to uppercase (string.toUpperCase())

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: 4
// b) Verify and explain: number - The operator typeof always returns a string. "undefined" is one of the primitive types that does not have a corresponding output with the operator "typeof". However, the output is only number(string and boolean both have an corresponding output with typeof) so it should also return "string" and "boolean"...
    // Please explain this more on why it does not return "string" and "boolean", very confused //