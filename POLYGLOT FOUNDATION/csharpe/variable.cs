using System;

namespace VariableLab
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("========== EXERCISE 1: Basic Values ==========");
            // Store: Age (20), Price (99.99), Name ("Pranav"), IsLearning (true)
            int age = 20;
            double price = 99.99;
            string name = "Pranav";
            bool isLearning = true;

            Console.WriteLine($"Age: {age} (Type: {age.GetType().Name})");
            Console.WriteLine($"Price: {price} (Type: {price.GetType().Name})");
            Console.WriteLine($"Name: {name} (Type: {name.GetType().Name})");
            Console.WriteLine($"IsLearning: {isLearning} (Type: {isLearning.GetType().Name})");

            Console.WriteLine("\n========== EXERCISE 2: Declaration, Initialization, Assignment ==========");
            // DECLARE: define type and allocate variable
            int score;

            // INITIALIZE: first assignment (local variables must be assigned before reading)
            score = 0;
            Console.WriteLine($"After Initialization (score = 0): {score}");

            // REASSIGN: subsequent assignments
            score = 10;
            Console.WriteLine($"After First Reassignment (score = 10): {score}");

            score = 20;
            Console.WriteLine($"After Second Reassignment (score = 20): {score}");

            Console.WriteLine("\n========== EXERCISE 3: Type Inference ==========");
            // Explicit Type:
            int explicitAge = 20;

            // Inferred Type: 'var' infers type at COMPILE TIME from RHS expression
            var inferredScore = 100; // Inferred as 'int' by Roslyn compiler

            Console.WriteLine($"Explicit Age: {explicitAge} (Type: {explicitAge.GetType().Name})");
            Console.WriteLine($"Inferred Score (var -> int): {inferredScore} (Type: {inferredScore.GetType().Name})");
            // Note: 'var' in C# is statically typed! It is NOT dynamic (C# provides 'dynamic' keyword for late binding).

            Console.WriteLine("\n========== EXERCISE 4: Type Conversion ==========");
            // 20 -> "20" (int to string)
            int num = 20;
            string strFromNum = num.ToString(); // or Convert.ToString(num)
            Console.WriteLine($"int 20 to string: \"{strFromNum}\" (Type: {strFromNum.GetType().Name})");

            // "20" -> 20 (string to int)
            string strNum = "20";
            int numFromStr = int.Parse(strNum); // or Convert.ToInt32(strNum)
            Console.WriteLine($"string \"20\" to int: {numFromStr} (Type: {numFromStr.GetType().Name})");

            Console.WriteLine("\n========== EXERCISE 5: Decimal Conversion ==========");
            // 10.9 (double) -> int
            double decimalVal = 10.9;
            int truncatedInt = (int)decimalVal; // Explicit narrowing cast
            Console.WriteLine($"Original double: {decimalVal}");
            Console.WriteLine($"Converted int (truncated): {truncatedInt}");
            Console.WriteLine("Observation: The fractional part (.9) is lost/truncated, not rounded.");

            Console.WriteLine("\n========== EXERCISE 6: Dynamic vs Static ==========");
            int staticValue = 10;
            Console.WriteLine($"staticValue (int): {staticValue}");

            // In C# (Statically Typed):
            // staticValue = "Hello";
            //
            // WHEN DOES THE ERROR OCCUR?
            // -> COMPILE TIME (Roslyn / csc).
            // The C# compiler rejects this during compilation:
            // "error CS0029: Cannot implicitly convert type 'string' to 'int'"
            // The IL / assembly is never generated.
            Console.WriteLine("C# is Statically Typed: Reassigning a string to an int variable causes a COMPILE-TIME error (CS0029).");
        }
    }
}

/*
============================================================
CONCEPTUAL SUMMARY: C# VARIABLES & TYPES
============================================================

1. Type System:
   - Statically typed: Every variable has a compile-time known type.
   - Strongly typed: Type safety is enforced by Roslyn compiler and CLR.

2. Declaration & Initialization:
   - `int score;` -> Declared.
   - `score = 0;` -> Initialized (definite assignment rule: compiler ensures assignment before usage).
   - `score = 20;` -> Reassigned.

3. Type Inference:
   - `var inferredScore = 100;` infers `int` statically at compile time.
   - Distinct from `dynamic` (which bypasses compile-time checks for late binding).

4. Conversion:
   - Explicit Casting: `(int) 10.9` -> 10 (truncation).
   - Parsing: `int.Parse("20")` and `20.ToString()`.

5. Error Phase:
   - Incompatible type assignments fail at COMPILE TIME (CS0029).
============================================================
*/

/*
C#

Important characteristics:

Static typing

Rich operator support

Pre/Post increment

Ternary

Integer division

Boolean conditions

Operator overloading

Advanced numeric types

Later C# will become particularly interesting for:

Game Development

Unity

.NET

Async Programming
*/
