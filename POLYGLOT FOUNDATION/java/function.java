/*
JAVA

Java strongly emphasizes:

Classes

Methods

Types

Explicit contracts

Functions usually live as:

Methods

inside classes.

Later:

Static methods

Instance methods

Interfaces

Functional interfaces
*/

class User {
    String name;
    boolean isActive;
    String role;

    User(String name, boolean isActive, String role) {
        this.name = name;
        this.isActive = isActive;
        this.role = role;
    }
}

public class function {

    // Global / Class-level variable (Static field)
    static String globalMessage = "I am a Class/Global-level variable in Java";

    // Starter Function: Calculate Final Price
    public static double calculateFinalPrice(double price, double discountPercentage) {
        return price - (price * discountPercentage / 100);
    }

    // ==========================================
    // EXERCISE 6 — FUNCTION COMPOSITION
    // ==========================================
    public static double calculateSubtotal(double unitPrice, int quantity) {
        return unitPrice * quantity;
    }

    public static double calculateTax(double subtotal, double taxRatePercentage) {
        return subtotal * (taxRatePercentage / 100.0);
    }

    public static double calculateTotal(double unitPrice, int quantity, double taxRatePercentage) {
        double subtotal = calculateSubtotal(unitPrice, quantity);
        double tax = calculateTax(subtotal, taxRatePercentage);
        return subtotal + tax;
    }

    // ==========================================
    // EXERCISE 7 — PURE VS IMPURE
    // ==========================================
    // Pure Function: deterministic (same input -> same output), zero side effects
    public static int calculateSquare(int number) {
        return number * number;
    }

    // Impure Function: performs I/O side effect (writing to stdout)
    public static int calculateAndPrintSquare(int number) {
        int result = number * number;
        System.out.println("[Side Effect: Console I/O] Square of " + number + " is " + result);
        return result;
    }

    // ==========================================
    // EXERCISE 8 — EARLY RETURN
    // ==========================================
    public static String getAccessLevel(User user) {
        // Rule 1: No user -> "No Access"
        if (user == null) {
            return "No Access";
        }
        // Rule 2: Inactive user -> "No Access"
        if (!user.isActive) {
            return "No Access";
        }
        // Rule 3: Admin -> "Admin"
        if ("admin".equalsIgnoreCase(user.role)) {
            return "Admin";
        }
        // Rule 4: Otherwise -> "User"
        return "User";
    }

    // ==========================================
    // EXERCISE 9 — SCOPE EXPERIMENT
    // ==========================================
    public static void demonstrateScope() {
        // Function-level variable (local to demonstrateScope method)
        String functionVar = "I am a Function-level variable";
        System.out.println("Inside method -> " + globalMessage);
        System.out.println("Inside method -> " + functionVar);

        if (true) {
            // Block-level variable (scoped strictly within this { } block)
            String blockVar = "I am a Block-level variable";
            System.out.println("Inside block  -> " + blockVar);
            System.out.println("Inside block can see functionVar -> " + functionVar);
        }
        // System.out.println(blockVar); // COMPILE ERROR: blockVar cannot be resolved outside its block
    }

    // ==========================================
    // EXERCISE 10 — MUTATION EXPERIMENT
    // ==========================================
    // Primitive data passed by value (copy of value)
    public static void modifyPrimitive(int num) {
        num = 999; // Only modifies local copy
    }

    // Object reference passed by value (copy of reference pointer to heap object)
    public static void modifyObject(User user) {
        if (user != null) {
            user.name = "Mutated Name"; // Modifies the actual object on heap
        }
    }

    public static void main(String[] args) {
        System.out.println("==================================================");
        System.out.println("STARTER: calculateFinalPrice");
        System.out.println("==================================================");
        System.out.println("Final price (100 with 15% discount): " + calculateFinalPrice(100, 15));

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 6 — FUNCTION COMPOSITION");
        System.out.println("==================================================");
        double unitPrice = 50.0;
        int quantity = 3;
        double taxRate = 8.0; // 8%
        double total = calculateTotal(unitPrice, quantity, taxRate);
        System.out.println("Subtotal (50 x 3): " + calculateSubtotal(unitPrice, quantity));
        System.out.println("Tax (8% on 150):   " + calculateTax(150, taxRate));
        System.out.println("Total (Composed):  " + total);

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 7 — PURE VS IMPURE");
        System.out.println("==================================================");
        System.out.println("Pure output:   " + calculateSquare(5));
        System.out.print("Impure output: ");
        int sq = calculateAndPrintSquare(5);

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 8 — EARLY RETURN (getAccessLevel)");
        System.out.println("==================================================");
        User adminUser = new User("Alice", true, "admin");
        User standardUser = new User("Bob", true, "user");
        User inactiveAdmin = new User("Charlie", false, "admin");
        User nullUser = null;

        System.out.println("Admin User:      " + getAccessLevel(adminUser));      // Expected: Admin
        System.out.println("Standard User:   " + getAccessLevel(standardUser));   // Expected: User
        System.out.println("Inactive Admin:  " + getAccessLevel(inactiveAdmin));  // Expected: No Access
        System.out.println("Null User:       " + getAccessLevel(nullUser));       // Expected: No Access

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 9 — SCOPE EXPERIMENT");
        System.out.println("==================================================");
        demonstrateScope();

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 10 — MUTATION EXPERIMENT");
        System.out.println("==================================================");
        int originalNumber = 42;
        modifyPrimitive(originalNumber);
        System.out.println("Primitive after modifyPrimitive (expected 42): " + originalNumber);

        User testUser = new User("Original Name", true, "user");
        modifyObject(testUser);
        System.out.println("User name after modifyObject (expected 'Mutated Name'): " + testUser.name);
    }
}