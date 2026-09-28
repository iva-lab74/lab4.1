//task 1: Flexible String Manipulation with Functions
//Create a function called formatFullName that takes two parameters: firstName and lastName. The function should return the full name in the format lastName, firstName.
//Format the firstName and lastName so that the first letter of each is always capatilized.
//Add a condition that checks if either the first or last name is missing. If so, return a string saying “Invalid name input.”

function formatFullName (firstName, lastName) {
    let userFirstName= firstName.charAt(0).toUpperCase() + firstName.slice(1);
    let userLastName= lastName.charAt(0).toUpperCase() + lastName.slice(1);
    let fullName = `${firstName} ${userlastName}`
    return fullName
}

console.log(fullName)

// Task 2: Mathematical Operations with Multiple Parameters
// Write a function called calculateTotalCost that takes three parameters: price, quantity, and taxRate.
// The function should calculate the total cost of items, including tax. Use the formula: totalCost = (price * quantity) * (1 + taxRate).
// Ensure that price, quantity, and taxRate are all valid numbers. If any are invalid, return a string: “Invalid input.”

function calculateTotalCost (price,quantity, taxRate) {
    if (typeof price !=="number" && typeof quantity !=="number"&& typeof taxRate  !=="number"){
        return "invalid input"
    } else {
       
        totalCost = (price * quanity) * (1 + taxRate)
        console.log(totalCost);
    }
}

// Task 3: Functions with Conditional Logic
// Write a function called checkEligibility that takes two parameters: age and isEmployed. The function should check if a person is eligible for a program based on the following rules:
// If the person is over 18 and employed, they are eligible.
// If the person is over 18 but unemployed, they are conditionally eligible.
// If the person is 18 or younger, they are not eligible.
// Return an appropriate string message for each scenario.

function checkEligibility( age, isEmployed) {
    if (age > 18 && isEmployed){
        return "Eligible";
}   else if (age > 18) {
        return "Conditionally eligible";
}   else {
        return "Not eligible";
    
}
}

// Task 4: Refactoring for Reusability
// Refactor the calculateTotalCost function from Task 2 to include an optional discount parameter. If the discount is provided, the function should subtract the discount from the total cost before applying tax.
// If no discount is provided, calculate the total cost as before.

 function calculatetotalCost (price, quantity, taxRate, discount=0) {
    if (typeof price !=="number" ||  typeof quantity !=="number" || typeof taxRate  !=="number" || typeof discount !=="number") {
        return "invalid input"
    }
        return ((price * quantity) -discount) * (1+ taxRate);
 }
