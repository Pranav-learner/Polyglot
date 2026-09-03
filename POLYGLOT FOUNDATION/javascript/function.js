/*
JAVASCRIPT

JavaScript treats functions as extremely flexible entities.

Functions can later be:

Stored

Passed

Returned

Created dynamically

This leads toward:

Callbacks

Closures

Higher-order functions

Async programming
*/

// Global scope variable
const globalMessage = "I am a Global variable in JavaScript";

// Starter Function: Calculate Final Price
function calculateFinalPrice(price, discountPercentage) {
    return price - (price * discountPercentage / 100);
}

// ==========================================
// EXERCISE 6 — FUNCTION COMPOSITION
// ==========================================
function calculateSubtotal(unitPrice, quantity) {
    return unitPrice * quantity;
}

function calculateTax(subtotal, taxRatePercentage) {
    return subtotal * (taxRatePercentage / 100.0);
}

function calculateTotal(unitPrice, quantity, taxRatePercentage) {
    const subtotal = calculateSubtotal(unitPrice, quantity);
    const tax = calculateTax(subtotal, taxRatePercentage);
    return subtotal + tax;
}

// ==========================================
// EXERCISE 7 — PURE VS IMPURE
// ==========================================
// Pure Function: deterministic (same input -> same output), zero side effects
function calculateSquare(number) {
    return number * number;
}

// Impure Function: performs I/O side effect (writing to stdout/console)
function calculateAndPrintSquare(number) {
    const result = number * number;
    console.log(`[Side Effect: Console I/O] Square of ${number} is ${result}`);
    return result;
}

// ==========================================
// EXERCISE 8 — EARLY RETURN
// ==========================================
function getAccessLevel(user) {
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
function demonstrateScope() {
    // Function-level variable (local to demonstrateScope)
    const functionVar = "I am a Function-scoped variable";
    console.log("Inside function ->", globalMessage);
    console.log("Inside function ->", functionVar);

    if (true) {
        // Block-level variable with let/const
        const blockVar = "I am a Block-scoped variable (let/const)";
        var legacyVar = "I am a var (function-scoped, ignores block boundaries!)";
        console.log("Inside block    ->", blockVar);
    }
    // blockVar is not accessible here (ReferenceError if accessed)
    console.log("Outside block   -> legacyVar leaked out:", legacyVar);
}

// ==========================================
// EXERCISE 10 — MUTATION EXPERIMENT
// ==========================================
// Primitive data passed by value (number, string, boolean)
function modifyPrimitive(num) {
    num = 999; // Rebinding local copy
}

// Object reference passed by value (modifying object properties mutates heap object)
function modifyObject(user) {
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
const unitPrice = 50.0;
const quantity = 3;
const taxRate = 8.0; // 8%
const total = calculateTotal(unitPrice, quantity, taxRate);
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
const adminUser = { name: "Alice", isActive: true, role: "admin" };
const standardUser = { name: "Bob", isActive: true, role: "user" };
const inactiveAdmin = { name: "Charlie", isActive: false, role: "admin" };
const nullUser = null;
const undefinedUser = undefined;

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
let originalNumber = 42;
modifyPrimitive(originalNumber);
console.log("Primitive after modifyPrimitive (expected 42):", originalNumber);

const testUser = { name: "Original Name", isActive: true, role: "user" };
modifyObject(testUser);
console.log("User name after modifyObject (expected 'Mutated Name'):", testUser.name);