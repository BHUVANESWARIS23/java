  let subject1 = parseInt(prompt("Enter marks for Subject 1:"));
  let subject2 = parseInt(prompt("Enter marks for Subject 2:"));
  let subject3 = parseInt(prompt("Enter marks for Subject 3:"));
  let subject4 = parseInt(prompt("Enter marks for Subject 4:"));
  let subject5 = parseInt(prompt("Enter marks for Subject 5:"));

// Total and average calculation
let total = subject1 + subject2 + subject3 + subject4 + subject5;
let average = total / 5;
// Grade calculation using if-else
let grade;

if (average >= 90) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else if (average >= 60) {
  grade = "D";
} else if (average >= 50) {
  grade = "E";
} else {
  grade = "F";
}

// Displaying the results
document.write("Total Marks: " + total + 
      "\nAverage Marks: " + average.toFixed(2) +
      "\nGrade: " + grade);

