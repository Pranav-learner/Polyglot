using System;

/*
C#

C# functions integrate deeply with:

Classes

Delegates

Lambdas

async/await

LINQ

Later:

Methods

Local functions

Extension methods

Delegates

Events
*/

namespace FunctionLab
{
    class User
    {
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public string Role { get; set; }

        public User(string name, bool isActive, string role)
        {
            Name = name;
            IsActive = isActive;
            Role = role;
        }
    }

    class Program
    {
        // Global / Class-level static field
        static string globalMessage = "I am a Class/Global-level variable in C#";

        // Starter Function: Calculate Final Price
        public static double CalculateFinalPrice(double price, double discountPercentage)
        {
            return price - (price * discountPercentage / 100);
        }

        // ==========================================
        // EXERCISE 6 — FUNCTION COMPOSITION
        // ==========================================
        public static double CalculateSubtotal(double unitPrice, int quantity)
        {
            return unitPrice * quantity;
        }

        public static double CalculateTax(double subtotal, double taxRatePercentage)
        {
            return subtotal * (taxRatePercentage / 100.0);
        }

        public static double CalculateTotal(double unitPrice, int quantity, double taxRatePercentage)
        {
            double subtotal = CalculateSubtotal(unitPrice, quantity);
            double tax = CalculateTax(subtotal, taxRatePercentage);
            return subtotal + tax;
        }

        // ==========================================
        // EXERCISE 7 — PURE VS IMPURE
        // ==========================================
        // Pure Function: deterministic (same input -> same output), zero side effects
        public static int CalculateSquare(int number)
        {
            return number * number;
        }

        // Impure Function: performs I/O side effect (writing to stdout)
        public static int CalculateAndPrintSquare(int number)
        {
            int result = number * number;
            Console.WriteLine($"[Side Effect: Console I/O] Square of {number} is {result}");
            return result;
        }

        // ==========================================
        // EXERCISE 8 — EARLY RETURN
        // ==========================================
        public static string GetAccessLevel(User? user)
        {
            // Rule 1: No user -> "No Access"
            if (user == null)
            {
                return "No Access";
            }
            // Rule 2: Inactive user -> "No Access"
            if (!user.IsActive)
            {
                return "No Access";
            }
            // Rule 3: Admin -> "Admin"
            if (string.Equals(user.Role, "admin", StringComparison.OrdinalIgnoreCase))
            {
                return "Admin";
            }
            // Rule 4: Otherwise -> "User"
            return "User";
        }

        // ==========================================
        // EXERCISE 9 — SCOPE EXPERIMENT
        // ==========================================
        public static void DemonstrateScope()
        {
            // Function-level variable (local to DemonstrateScope method)
            string functionVar = "I am a Function-level variable in C#";
            Console.WriteLine("Inside method -> " + globalMessage);
            Console.WriteLine("Inside method -> " + functionVar);

            if (true)
            {
                // Block-level variable (scoped strictly within this { } block)
                string blockVar = "I am a Block-level variable in C#";
                Console.WriteLine("Inside block  -> " + blockVar);
                Console.WriteLine("Inside block can see functionVar -> " + functionVar);
            }
            // blockVar is not accessible here (C# compile error: The name 'blockVar' does not exist in the current context)
        }

        // ==========================================
        // EXERCISE 10 — MUTATION EXPERIMENT
        // ==========================================
        // Value type passed by value (copy of value)
        public static void ModifyPrimitive(int num)
        {
            num = 999; // Only modifies local copy
        }

        // Reference type passed by value (copy of reference pointer to heap object)
        public static void ModifyObject(User? user)
        {
            if (user != null)
            {
                user.Name = "Mutated Name"; // Modifies the object on heap
            }
        }

        static void Main(string[] args)
        {
            Console.WriteLine("==================================================");
            Console.WriteLine("STARTER: CalculateFinalPrice");
            Console.WriteLine("==================================================");
            Console.WriteLine($"Final price (100 with 15% discount): {CalculateFinalPrice(100, 15)}");

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 6 — FUNCTION COMPOSITION");
            Console.WriteLine("==================================================");
            double unitPrice = 50.0;
            int quantity = 3;
            double taxRate = 8.0; // 8%
            double total = CalculateTotal(unitPrice, quantity, taxRate);
            Console.WriteLine($"Subtotal (50 x 3): {CalculateSubtotal(unitPrice, quantity)}");
            Console.WriteLine($"Tax (8% on 150):   {CalculateTax(150, taxRate)}");
            Console.WriteLine($"Total (Composed):  {total}");

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 7 — PURE VS IMPURE");
            Console.WriteLine("==================================================");
            Console.WriteLine($"Pure output:   {CalculateSquare(5)}");
            Console.Write("Impure output: ");
            int sq = CalculateAndPrintSquare(5);

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 8 — EARLY RETURN (GetAccessLevel)");
            Console.WriteLine("==================================================");
            User adminUser = new User("Alice", true, "admin");
            User standardUser = new User("Bob", true, "user");
            User inactiveAdmin = new User("Charlie", false, "admin");
            User? nullUser = null;

            Console.WriteLine($"Admin User:      {GetAccessLevel(adminUser)}");      // Expected: Admin
            Console.WriteLine($"Standard User:   {GetAccessLevel(standardUser)}");   // Expected: User
            Console.WriteLine($"Inactive Admin:  {GetAccessLevel(inactiveAdmin)}");  // Expected: No Access
            Console.WriteLine($"Null User:       {GetAccessLevel(nullUser)}");       // Expected: No Access

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 9 — SCOPE EXPERIMENT");
            Console.WriteLine("==================================================");
            DemonstrateScope();

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 10 — MUTATION EXPERIMENT");
            Console.WriteLine("==================================================");
            int originalNumber = 42;
            ModifyPrimitive(originalNumber);
            Console.WriteLine($"Primitive after ModifyPrimitive (expected 42): {originalNumber}");

            User testUser = new User("Original Name", true, "user");
            ModifyObject(testUser);
            Console.WriteLine($"User name after ModifyObject (expected 'Mutated Name'): {testUser.Name}");
        }
    }
}