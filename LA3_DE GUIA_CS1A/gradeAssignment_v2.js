// Create a variable named 'score' to store the user's input and convert it to a number
let score = parseInt(prompt("Enter your score: "));

// Create a variable named 'grade' and use a conditional ternary statement to assign grades based on the given criteria
let grade = score >= 97 ? "\"1.00\" Excellent"
        : score >= 94 ? "\"1.25\" Excellent"
        : score >= 91 ? "\"1.50\" Above Average"
        : score >= 88 ? "\"1.75\" Above Average"
        : score >= 85 ? "\"2.00\" Average"
        : score >= 82 ? "\"2.25\" Average"
        : score >= 79 ? "\"2.50\" Below Average"
        : score >= 76 ? "\"2.75\" Below Average"
        : score === 75 ? "\"3.00\" Below Average"
        : score >= 72 ? "\"4.00\" Poor" 
        : "5.00 Poor"; // Assigned when the score is 71 or below

// Create a variable named 'remarks' and set it to null or (empty)
let remarks = null;

// Use if..else if..else statements to determine the final remarks based on the score
if (score >= 90) {
    remarks = "HIGH PASS, Candidate for Cum Laude"; // Assigned if the score is 90 or above
} else if (score >= 80) {
    remarks = "AVERAGE PASS"; // Assigned if the score is between 80 and 89
} else if (score >= 75) {
    remarks = "LOW PASS"; // Assigned if the score is between 75 and 79
} else {
    remarks = "FAILED, Needs Improvement"; // Assigned if the score is below 75
}

// Display the results in the console
console.log(`Result:\nYour equivalent Grade is ${grade}\nFinal Remarks: ${remarks}`);
