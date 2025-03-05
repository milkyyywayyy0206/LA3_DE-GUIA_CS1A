// Create a variable named "maxLimit" to prompt the user to enter the maximum limit for the double loop and convert it to a number
let maxLimit = parseInt(prompt("Enter the Limit of the Double Loop: "));

// The Outer loop Iterates or repeats the process from 0 to maxLimit
for (let i = 0; i <= maxLimit; i++) {
    
    // The Inner loop Iterates or repeats the process from 0 to maxLimit for each value of i
    for (let j = 0; j <= maxLimit; j++) {
        
        // Create a variable named "addedValue" to store the sum of i and j
        let addedValue = i + j;
        
        // Print the current loop iteration and the added value
        console.log(`[${i}] [${j}] Added value is ${addedValue}`);
    }
}
