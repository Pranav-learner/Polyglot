console.log("========== EXERCISE 1: Basic Values ==========");
// Store: Age (20), Price (99.99), Name ("Pranav"), IsLearning (true)
let age = 20;
let price = 99.99;
let name = "Pranav";
let isLearning = true;

console.log("Age:", age, "(type:", typeof age + ")");
console.log("Price:", price, "(type:", typeof price + ")");
console.log("Name:", name, "(type:", typeof name + ")");
console.log("IsLearning:", isLearning, "(type:", typeof isLearning + ")");

console.log("\n========== EXERCISE 2: Declaration, Initialization, Assignment ==========");
// DECLARE: variable created in scope, automatically initialized to 'undefined'
let score;
console.log("After Declaration (score):", score, "(type:", typeof score + ")");

// INITIALIZE: first explicit value assignment
score = 0;
console.log("After Initialization (score = 0):", score);

// REASSIGN: subsequent assignments
score = 10;
console.log("After First Reassignment (score = 10):", score);

score = 20;
console.log("After Second Reassignment (score = 20):", score);

console.log("\n========== EXERCISE 3: Type Inference / Dynamic Typing ==========");
// JavaScript is dynamically typed.
// Types are associated with runtime VALUES, not variable names/bindings.
// There is no static compile-time type inference; variables can hold any value at runtime.
let explicitStyle = 20; // In JS, all numbers are double-precision 64-bit binary format IEEE 754
let inferredStyle = 100;
console.log("explicitStyle:", explicitStyle, "| typeof at runtime:", typeof explicitStyle);
console.log("inferredStyle:", inferredStyle, "| typeof at runtime:", typeof inferredStyle);

console.log("\n========== EXERCISE 4: Type Conversion ==========");
// 20 -> "20" (number to string)
let num = 20;
let strFromNum = String(num); // or num.toString()
console.log('number 20 to string:', `"${strFromNum}"`, "| typeof:", typeof strFromNum);

// "20" -> 20 (string to number)
let strNum = "20";
let numFromStr = Number(strNum); // or parseInt(strNum, 10)
console.log('string "20" to number:', numFromStr, "| typeof:", typeof numFromStr);

console.log("\n========== EXERCISE 5: Decimal Conversion ==========");
// 10.9 -> integer
let decimalVal = 10.9;
let intVal = Math.trunc(decimalVal); // or parseInt(decimalVal)
console.log("Original decimal:", decimalVal);
console.log("Converted int (Math.trunc):", intVal);
console.log("Observation: Decimal portion (.9) is discarded/truncated.");

console.log("\n========== EXERCISE 6: Dynamic vs Static ==========");
let value = 10;
console.log("value:", value, "| type:", typeof value);

// Dynamic reassignment to a different type:
value = "Hello";
console.log("value:", value, "| type:", typeof value);

// WHEN DOES AN ERROR OCCUR?
// -> NO ERROR!
// JavaScript is dynamically typed. The variable binding can hold any type at runtime.
// The engine simply updates the reference to point to the string "Hello" during RUNTIME execution.
console.log("JavaScript is Dynamically Typed: Reassignment to any type succeeds seamlessly at RUNTIME.");

/*
============================================================
CONCEPTUAL SUMMARY: JAVASCRIPT VARIABLES & TYPES
============================================================

1. Type System:
   - Dynamically typed: Types belong to values, not variable containers.
   - Weakly typed (or coercion-rich): Performs implicit type conversions in many operations (e.g. "5" + 2 = "52").

2. Declaration & Initialization:
   - `let score;` -> Allocated in memory and bound to `undefined`.
   - `score = 0;` -> Initialized.
   - `score = 20;` -> Reassigned.

3. Type Inference:
   - Not applicable at static compile time. The JS engine/JIT tracks types dynamically at runtime.

4. Conversion:
   - Explicit: `Number("20")`, `String(20)`, `Math.trunc(10.9)`.
   - Truncation loses the decimal portion (.9).

5. Error Phase:
   - Dynamic typing errors (like calling undefined as a function) occur at RUNTIME.
============================================================
*/

/*
JAVASCRIPT / TYPESCRIPT

Important characteristics:

Dynamic JavaScript runtime

Truthy / Falsy

==

===

Automatic coercion

||

&&

can return operands

** operator

Number system differences

TypeScript adds:

Static type checking

but runtime operator semantics remain fundamentally JavaScript semantics.
*/