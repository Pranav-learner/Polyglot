/*
JAVASCRIPT / TYPESCRIPT

Important characteristics:

if / else

switch

Truthy / Falsy

Short-circuit logic

Ternary

Optional chaining

Nullish coalescing

A major challenge is:

JavaScript coercion
+
truthiness

TypeScript improves safety through static type checking.
*/

// ==========================================
// EXERCISE 1: AGE CLASSIFIER
// ==========================================
/*
Decision Tree:
           [ age < 13 ]
           /          \
        YES            NO
       /                \
   "Child"         [ age <= 17 ]
                   /           \
                YES             NO
               /                 \
          "Teenager"        [ age <= 64 ]
                            /           \
                         YES             NO
                        /                 \
                    "Adult"            "Senior"

Boundary Values: 12, 13, 17, 18, 64, 65
*/
function classifyAge(age) {
    if (age < 0) {
        return "Invalid Age";
    } else if (age < 13) {
        return "Child";
    } else if (age <= 17) {
        return "Teenager";
    } else if (age <= 64) {
        return "Adult";
    } else {
        return "Senior";
    }
}

// ==========================================
// EXERCISE 2: LOGIN SYSTEM
// ==========================================
// 1. Nested Conditions
function loginNested(userExists, passwordCorrect, isBanned) {
    if (userExists) {
        if (passwordCorrect) {
            if (!isBanned) {
                return "Login successful";
            } else {
                return "Reject: User is banned";
            }
        } else {
            return "Reject: Incorrect password";
        }
    } else {
        return "Reject: User does not exist";
    }
}

// 2. Guard Clauses (Clean, Linear Early Exits)
function loginGuardClauses(userExists, passwordCorrect, isBanned) {
    if (!userExists) return "Reject: User does not exist";
    if (!passwordCorrect) return "Reject: Incorrect password";
    if (isBanned) return "Reject: User is banned";
    return "Login successful";
}

// ==========================================
// EXERCISE 3: NULL / MISSING VALUE
// ==========================================
// JS Concept:
// 'null' = intentional absence of an object value
// 'undefined' = uninitialized variable or missing property
// Pattern: CHECK -> ACCESS
function checkAndAccessUser(user) {
    process.stdout.write("Accessing user: ");
    if (user !== null && user !== undefined) {
        // SAFE: Both null and undefined checked before property access
        console.log(`User name is ${user.name}`);
    } else {
        console.log("User is null or undefined! Cannot access properties.");
    }
}

// ==========================================
// RUNNER & VERIFICATION
// ==========================================
console.log("==================================================");
console.log("EXERCISE 1: AGE CLASSIFIER (JavaScript)");
console.log("==================================================");
const testAges = [12, 13, 17, 18, 64, 65];
testAges.forEach(age => {
    console.log(`Age ${age} -> ${classifyAge(age)}`);
});

console.log("\n==================================================");
console.log("EXERCISE 2: LOGIN SYSTEM (JavaScript)");
console.log("==================================================");
console.log("--- Testing Nested Conditions ---");
console.log("Case 1 (No user):    ", loginNested(false, true, false));
console.log("Case 2 (Wrong pass): ", loginNested(true, false, false));
console.log("Case 3 (Banned):     ", loginNested(true, true, true));
console.log("Case 4 (Valid login):", loginNested(true, true, false));

console.log("\n--- Testing Guard Clauses (Refactored) ---");
console.log("Case 1 (No user):    ", loginGuardClauses(false, true, false));
console.log("Case 2 (Wrong pass): ", loginGuardClauses(true, false, false));
console.log("Case 3 (Banned):     ", loginGuardClauses(true, true, true));
console.log("Case 4 (Valid login):", loginGuardClauses(true, true, false));

console.log("\n==================================================");
console.log("EXERCISE 3: NULL / MISSING VALUE (JavaScript)");
console.log("==================================================");
const validUser = { name: "Pranav" };
const nullUser = null;
const undefinedUser = undefined;

checkAndAccessUser(validUser);
checkAndAccessUser(nullUser);
checkAndAccessUser(undefinedUser);
