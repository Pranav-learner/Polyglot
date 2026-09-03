export {}; // Module scope to prevent duplicate identifier collisions

/*
TYPESCRIPT

TypeScript adds stronger static type information.

Functions can express:

Parameter Types

Return Types

Function Types

This helps with:

Tooling

Refactoring

Large Applications
*/

interface User {
    name: string;
    isActive: boolean;
    role: string;
}

// Global scope variable
const globalMessage: string = "I am a Global variable in TypeScript";

// Starter Function: Calculate Final Price
function calculateFinalPrice(price: number, discountPercentage: number): number {
    return price - (price * discountPercentage / 100);
}

// ==========================================
// EXERCISE 6 — FUNCTION COMPOSITION
// ==========================================
function calculateSubtotal(unitPrice: number, quantity: number): number {
    return unitPrice * quantity;
}

function calculateTax(subtotal: number, taxRatePercentage: number): number {
    return subtotal * (taxRatePercentage / 100.0);
}

function calculateTotal(unitPrice: number, quantity: number, taxRatePercentage: number): number {
    const subtotal: number = calculateSubtotal(unitPrice, quantity);
    const tax: number = calculateTax(subtotal, taxRatePercentage);
    return subtotal + tax;
}

// ==========================================
// EXERCISE 7 — PURE VS IMPURE
// ==========================================
// Pure Function: deterministic (same input -> same output), zero side effects
function calculateSquare(number: number): number {
    return number * number;
}

// Impure Function: performs I/O side effect (writing to stdout/console)
function calculateAndPrintSquare(number: number): number {
    const result: number = number * number;
    console.log(`[Side Effect: Console I/O] Square of ${number} is ${result}`);
    return result;
}

// ==========================================
// EXERCISE 8 — EARLY RETURN
// ==========================================
function getAccessLevel(user: User | null | undefined): string {
    // Rule 1: No user (null or undefined) -> "No Access"
    if (!user) {
        return "No Access";
    }
    // Rule 2: Inactive user -> "No Access"
    if (!user.isActive) {
        return "No Access";
    }
    // Rule 3: Admin -> "Admin"
    if (user.role && user.role.toLowerCase() === "admin") {
        return "Admin";
    }
    // Rule 4: Otherwise -> "User"
    return "User";
}

// ==========================================
// EXERCISE 9 — SCOPE EXPERIMENT
// ==========================================
function demonstrateScope(): void {
    // Function-level variable (local to demonstrateScope)
    const functionVar: string = "I am a Function-scoped variable";
    console.log("Inside function ->", globalMessage);
    console.log("Inside function ->", functionVar);

    if (true) {
        // Block-level variable with let/const
        const blockVar: string = "I am a Block-scoped variable (let/const)";
        console.log("Inside block    ->", blockVar);
        console.log("Inside block can see functionVar ->", functionVar);
    }
    // blockVar cannot be accessed here (compile-time TS error)
}

// ==========================================
// EXERCISE 10 — MUTATION EXPERIMENT
// ==========================================
// Primitive data passed by value (number, string, boolean)
function modifyPrimitive(num: number): void {
    num = 999; // Rebinding local copy
}

// Object reference passed by value (modifying object properties mutates heap object)
function modifyObject(user: User | null): void {
    if (user) {
        user.name = "Mutated Name";
    }
}

// Runner
console.log("==================================================");
console.log("STARTER: calculateFinalPrice");
console.log("==================================================");
console.log("Final price (100 with 15% discount):", calculateFinalPrice(100, 15));

console.log("\n==================================================");
console.log("EXERCISE 6 — FUNCTION COMPOSITION");
console.log("==================================================");
const unitPrice: number = 50.0;
const quantity: number = 3;
const taxRate: number = 8.0; // 8%
const total: number = calculateTotal(unitPrice, quantity, taxRate);
console.log("Subtotal (50 x 3):", calculateSubtotal(unitPrice, quantity));
console.log("Tax (8% on 150):  ", calculateTax(150, taxRate));
console.log("Total (Composed): ", total);

console.log("\n==================================================");
console.log("EXERCISE 7 — PURE VS IMPURE");
console.log("==================================================");
console.log("Pure output:  ", calculateSquare(5));
process.stdout.write("Impure output: ");
calculateAndPrintSquare(5);

console.log("\n==================================================");
console.log("EXERCISE 8 — EARLY RETURN (getAccessLevel)");
console.log("==================================================");
const adminUser: User = { name: "Alice", isActive: true, role: "admin" };
const standardUser: User = { name: "Bob", isActive: true, role: "user" };
const inactiveAdmin: User = { name: "Charlie", isActive: false, role: "admin" };
const nullUser: User | null = null;
const undefinedUser: User | undefined = undefined;

console.log("Admin User:     ", getAccessLevel(adminUser));     // Expected: Admin
console.log("Standard User:  ", getAccessLevel(standardUser));  // Expected: User
console.log("Inactive Admin: ", getAccessLevel(inactiveAdmin)); // Expected: No Access
console.log("Null User:      ", getAccessLevel(nullUser));      // Expected: No Access
console.log("Undefined User: ", getAccessLevel(undefinedUser)); // Expected: No Access

console.log("\n==================================================");
console.log("EXERCISE 9 — SCOPE EXPERIMENT");
console.log("==================================================");
demonstrateScope();

console.log("\n==================================================");
console.log("EXERCISE 10 — MUTATION EXPERIMENT");
console.log("==================================================");
let originalNumber: number = 42;
modifyPrimitive(originalNumber);
console.log("Primitive after modifyPrimitive (expected 42):", originalNumber);

const testUser: User = { name: "Original Name", isActive: true, role: "user" };
modifyObject(testUser);
console.log("User name after modifyObject (expected 'Mutated Name'):", testUser.name);