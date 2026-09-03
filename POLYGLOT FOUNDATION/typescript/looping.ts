export {}; // Module scope to prevent duplicate identifier collisions

// VALUE BASED ITERATION
//for (const user of users) {
//    console.log(user);
//}

console.log("==================================================");
console.log("EXERCISE 1 — COUNTING (1 to 10)");
console.log("==================================================");
process.stdout.write("Using for loop:\n");
let forStr: string = "";
for (let i: number = 1; i <= 10; i++) {
    forStr += i + " ";
}
console.log(forStr);

process.stdout.write("Using while loop:\n");
let w: number = 1;
let whileStr: string = "";
while (w <= 10) {
    whileStr += w + " ";
    w++;
}
console.log(whileStr);

console.log("\n==================================================");
console.log("EXERCISE 2 — REVERSE COUNTING (10 to 1)");
console.log("==================================================");
let revStr: string = "";
for (let i: number = 10; i >= 1; i--) {
    revStr += i + " ";
}
console.log(revStr);

console.log("\n==================================================");
console.log("EXERCISE 3 — SUM OF NUMBERS (1 to 100)");
console.log("==================================================");
/*
Loop Invariant:
At the start of iteration i, 'sum' contains the sum of integers from 1 to (i - 1).
At the end of iteration i, 'sum' contains the sum of integers from 1 to i.
*/
let sum: number = 0;
for (let i: number = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of 1 to 100 =", sum); // Expected: 5050

console.log("\n==================================================");
console.log("EXERCISE 4 — EVEN NUMBERS (2, 4, 6, 8, 10)");
console.log("==================================================");
console.log("Method 1 (i += 2 step update):");
let evenMethod1: string = "";
for (let i: number = 2; i <= 10; i += 2) {
    evenMethod1 += i + " ";
}
console.log(evenMethod1);

console.log("Method 2 (i++ with modulo condition):");
let evenMethod2: string = "";
for (let i: number = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        evenMethod2 += i + " ";
    }
}
console.log(evenMethod2);

console.log("\n==================================================");
console.log("EXERCISE 5 — SKIP MULTIPLES OF 3 (1 to 20 with continue)");
console.log("==================================================");
let skip3Str: string = "";
for (let i: number = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    skip3Str += i + " ";
}
console.log(skip3Str);

console.log("\n==================================================");
console.log("EXERCISE 6 — STOP AT 42 (Linear Search with break)");
console.log("==================================================");
const searchNumbers: number[] = [10, 25, 7, 42, 99, 100];
for (const num of searchNumbers) {
    console.log("Checking:", num);
    if (num === 42) {
        console.log("-> FOUND 42! Breaking out of loop.");
        break;
    }
}

console.log("\n==================================================");
console.log("EXERCISE 7 — COUNT POSITIVE NUMBERS");
console.log("==================================================");
const values: number[] = [-2, 5, 0, 7, -9, 3];
let positiveCount: number = 0;
for (const val of values) {
    if (val > 0) {
        positiveCount++;
    }
}
console.log("Given array: [-2, 5, 0, 7, -9, 3]");
console.log("Number of positive values (> 0):", positiveCount); // Expected: 3

console.log("\n==================================================");
console.log("EXERCISE 8 — FIND MAXIMUM (Manual Algorithm)");
console.log("==================================================");
const dataset: number[] = [12, 7, 45, 3, 98, 21];
let max: number = dataset[0];
for (let i: number = 1; i < dataset.length; i++) {
    if (dataset[i] > max) {
        max = dataset[i];
    }
}
console.log("Dataset: [12, 7, 45, 3, 98, 21]");
console.log("Maximum value found:", max); // Expected: 98

console.log("\n==================================================");
console.log("EXERCISE 9 — MULTIPLICATION TABLE (5 x 1 to 10)");
console.log("==================================================");
for (let i: number = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\n==================================================");
console.log("EXERCISE 10 — NESTED LOOPS (Star Triangle Pattern)");
console.log("==================================================");
const totalRows: number = 5;
for (let row: number = 1; row <= totalRows; row++) {
    let rowStr: string = "";
    for (let col: number = 1; col <= row; col++) {
        rowStr += "*";
    }
    console.log(rowStr);
}

console.log("\n==================================================");
console.log("EXERCISE 11 — FIND DUPLICATES (O(N^2) Nested Loops)");
console.log("==================================================");
const dupArray: number[] = [1, 2, 3, 2, 5, 1];
console.log("Array: [1, 2, 3, 2, 5, 1]");
let duplicates: number[] = [];
for (let i: number = 0; i < dupArray.length; i++) {
    for (let j: number = i + 1; j < dupArray.length; j++) {
        if (dupArray[i] === dupArray[j]) {
            duplicates.push(dupArray[i]);
            break;
        }
    }
}
console.log("Duplicates found:", duplicates.join(" "));

console.log("\n==================================================");
console.log("EXERCISE 12 — INPUT VALIDATION LOOP");
console.log("==================================================");
// Valid rule: age >= 0 && age <= 150
const simulatedInputs: number[] = [-5, 200, 25];
let inputIndex: number = 0;
let validatedAge: number = -1;

while (true) {
    const candidateAge: number = simulatedInputs[inputIndex++];
    console.log(`Prompting user... Received input: ${candidateAge}`);

    if (candidateAge >= 0 && candidateAge <= 150) {
        validatedAge = candidateAge;
        console.log(`-> Valid age accepted: ${validatedAge}`);
        break;
    } else {
        console.log("-> Invalid age! Must be between 0 and 150. Retrying...");
    }
}

console.log("\n==================================================");
console.log("EXERCISE 13 — SIMPLE RETRY SYSTEM");
console.log("==================================================");
const maxAttempts: number = 3;

// Scenario A: Succeeds on attempt 3
console.log("--- Scenario A: Transient failure (succeeds on attempt 3) ---");
let operationSuccess: boolean = false;
for (let attempt: number = 1; attempt <= maxAttempts; attempt++) {
    console.log(`Attempt ${attempt} of ${maxAttempts}...`);
    if (attempt === 3) {
        console.log(`-> Operation succeeded on attempt ${attempt}!`);
        operationSuccess = true;
        break;
    } else {
        console.log("-> Operation failed.");
    }
}
if (!operationSuccess) {
    console.log("FAILED");
}

// Scenario B: Permanent failure
console.log("\n--- Scenario B: Permanent failure ---");
operationSuccess = false;
for (let attempt: number = 1; attempt <= maxAttempts; attempt++) {
    console.log(`Attempt ${attempt} of ${maxAttempts}...`);
    console.log("-> Operation failed.");
}
if (!operationSuccess) {
    console.log("FAILED");
}