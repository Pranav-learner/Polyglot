using System;

/*
C#

Important characteristics:

if

else

switch

switch expressions

ternary

pattern matching

nullable features

C# has very rich modern control-flow capabilities.
*/

namespace WorkflowLab
{
    class User
    {
        public string Name { get; set; }
        public User(string name)
        {
            Name = name;
        }
    }

    class Program
    {
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
        public static string ClassifyAge(int age)
        {
            if (age < 0)
            {
                return "Invalid Age";
            }
            else if (age < 13)
            {
                return "Child";
            }
            else if (age <= 17)
            {
                return "Teenager";
            }
            else if (age <= 64)
            {
                return "Adult";
            }
            else
            {
                return "Senior";
            }
        }

        // ==========================================
        // EXERCISE 2: LOGIN SYSTEM
        // ==========================================
        // 1. Nested Conditions (Pyramid of Doom)
        public static string LoginNested(bool userExists, bool passwordCorrect, bool isBanned)
        {
            if (userExists)
            {
                if (passwordCorrect)
                {
                    if (!isBanned)
                    {
                        return "Login successful";
                    }
                    else
                    {
                        return "Reject: User is banned";
                    }
                }
                else
                {
                    return "Reject: Incorrect password";
                }
            }
            else
            {
                return "Reject: User does not exist";
            }
        }

        // 2. Guard Clauses (Clean, Linear Early Exits)
        public static string LoginGuardClauses(bool userExists, bool passwordCorrect, bool isBanned)
        {
            if (!userExists) return "Reject: User does not exist";
            if (!passwordCorrect) return "Reject: Incorrect password";
            if (isBanned) return "Reject: User is banned";
            return "Login successful";
        }

        // ==========================================
        // EXERCISE 3: NULL / MISSING VALUE
        // ==========================================
        // C# Concept: 'null' indicates a reference variable that does not refer to an object in memory.
        // Accessing members without checking throws NullReferenceException.
        // Pattern: CHECK -> ACCESS
        public static void CheckAndAccessUser(User? user)
        {
            Console.Write("Accessing user: ");
            if (user != null)
            {
                // SAFE: Checked reference before accessing property
                Console.WriteLine($"User name is {user.Name}");
            }
            else
            {
                Console.WriteLine("User is null! Cannot access properties.");
            }
        }

        static void Main(string[] args)
        {
            Console.WriteLine("==================================================");
            Console.WriteLine("EXERCISE 1: AGE CLASSIFIER (C#)");
            Console.WriteLine("==================================================");
            int[] testAges = { 12, 13, 17, 18, 64, 65 };
            foreach (int age in testAges)
            {
                Console.WriteLine($"Age {age} -> {ClassifyAge(age)}");
            }

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 2: LOGIN SYSTEM (C#)");
            Console.WriteLine("==================================================");
            Console.WriteLine("--- Testing Nested Conditions ---");
            Console.WriteLine($"Case 1 (No user):     {LoginNested(false, true, false)}");
            Console.WriteLine($"Case 2 (Wrong pass):   {LoginNested(true, false, false)}");
            Console.WriteLine($"Case 3 (Banned):       {LoginNested(true, true, true)}");
            Console.WriteLine($"Case 4 (Valid login):  {LoginNested(true, true, false)}");

            Console.WriteLine("\n--- Testing Guard Clauses (Refactored) ---");
            Console.WriteLine($"Case 1 (No user):     {LoginGuardClauses(false, true, false)}");
            Console.WriteLine($"Case 2 (Wrong pass):   {LoginGuardClauses(true, false, false)}");
            Console.WriteLine($"Case 3 (Banned):       {LoginGuardClauses(true, true, true)}");
            Console.WriteLine($"Case 4 (Valid login):  {LoginGuardClauses(true, true, false)}");

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 3: NULL / MISSING VALUE (C#)");
            Console.WriteLine("==================================================");
            User validUser = new User("Pranav");
            User? nullUser = null;

            CheckAndAccessUser(validUser);
            CheckAndAccessUser(nullUser);
        }
    }
}
