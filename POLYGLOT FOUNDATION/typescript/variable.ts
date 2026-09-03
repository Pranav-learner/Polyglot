export {}; // Module scope to avoid global identifier collision

console.log("========== EXERCISE 1: Basic Values ==========");
// Store: Age (20), Price (99.99), Name ("Pranav"), IsLearning (true)
let age: number = 20;
let price: number = 99.99;
let name: string = "Pranav";
let isLearning: boolean = true;

console.log("Age:", age, "(type: number)");
console.log("Price:", price, "(type: number)");
console.log("Name:", name, "(type: string)");
console.log("IsLearning:", isLearning, "(type: boolean)");

console.log("\n========== EXERCISE 2: Declaration, Initialization, Assignment ==========");
// DECLARE with explicit type annotation
let score: number;

// INITIALIZE
score = 0;
console.log("After Initialization (score = 0):", score);

// REASSIGN
score = 10;
console.log("After First Reassignment (score = 10):", score);

score = 20;
console.log("After Second Reassignment (score = 20):", score);

console.log("\n========== EXERCISE 3: Type Inference ==========");
// Explicit Type: Programmer explicitly defines the type
let explicitAge: number = 20;

// Inferred Type: TypeScript compiler infers 'inferredScore' as 'number' at compile time from the literal 100
let inferredScore = 100;

console.log("Explicit Age (number):", explicitAge);
console.log("Inferred Score (inferred as number):", inferredScore);

console.log("\n========== EXERCISE 4: Type Conversion ==========");
// 20 -> "20" (number to string)
let num: number = 20;
let strFromNum: string = String(num); // or num.toString()
console.log('number 20 to string:', `"${strFromNum}"`, "| typeof:", typeof strFromNum);

// "20" -> 20 (string to number)
let strNum: string = "20";
let numFromStr: number = Number(strNum); // or parseInt(strNum, 10)
console.log('string "20" to number:', numFromStr, "| typeof:", typeof numFromStr);

console.log("\n========== EXERCISE 5: Decimal Conversion ==========");
// 10.9 -> integer
let decimalVal: number = 10.9;
let intVal: number = Math.trunc(decimalVal); // or parseInt(decimalVal.toString())
console.log("Original decimal:", decimalVal);
console.log("Converted int (Math.trunc):", intVal);
console.log("Observation: Fractional portion (.9) is truncated.");

console.log("\n========== EXERCISE 6: Dynamic vs Static ==========");
let value: number = 10;
console.log("value:", value, "| type:", typeof value);

// In TypeScript (Statically Type-Checked):
// value = "Hello";
//
// WHEN DOES THE ERROR OCCUR?
// -> TYPE-CHECK TIME / COMPILE TIME (tsc).
// The TypeScript compiler catches this statically during compilation:
// "error TS2322: Type 'string' is not assignable to type 'number'."
// Note: TypeScript performs static analysis BEFORE generating JavaScript.
// Types are completely erased during compilation into JavaScript!
console.log("TypeScript is Statically Typed at Compile/Type-Check Time: Assigning 'Hello' to a number is caught by tsc before runtime.");

/*
============================================================
CONCEPTUAL SUMMARY: TYPESCRIPT VARIABLES & TYPES
============================================================

1. Type System:
   - Statically typed at compile time (structural type system).
   - Compiles down to JavaScript, where types are erased (type erasure).

2. Declaration & Initialization:
   - `let score: number;` -> Type-checked declaration.
   - `score = 0;` -> Initialized.
   - `score = 20;` -> Reassigned.

3. Type Inference:
   - `let inferredScore = 100;` is inferred as type `number` automatically.
   - Assigning a boolean or string to `inferredScore` afterwards triggers TS2322.

4. Conversion:
   - `String(num)`, `Number(strNum)`, `Math.trunc(decimalVal)`.
   - Conversions are explicitly written using JavaScript runtime functions.

5. Error Phase:
   - Type mismatch errors occur at TYPE-CHECK / COMPILE TIME (tsc).
============================================================
*/
