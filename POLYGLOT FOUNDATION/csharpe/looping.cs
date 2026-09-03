using System;
using System.Collections.Generic;

// VALUE BASED ITERATION
/*
foreach (var user in users) {
    Console.WriteLine(user);
}   
*/

namespace LoopingLab
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("==================================================");
            Console.WriteLine("EXERCISE 1 — COUNTING (1 to 10)");
            Console.WriteLine("==================================================");
            Console.WriteLine("Using for loop:");
            for (int i = 1; i <= 10; i++)
            {
                Console.Write(i + " ");
            }
            Console.WriteLine("\nUsing while loop:");
            int w = 1;
            while (w <= 10)
            {
                Console.Write(w + " ");
                w++;
            }
            Console.WriteLine();

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 2 — REVERSE COUNTING (10 to 1)");
            Console.WriteLine("==================================================");
            for (int i = 10; i >= 1; i--)
            {
                Console.Write(i + " ");
            }
            Console.WriteLine();

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 3 — SUM OF NUMBERS (1 to 100)");
            Console.WriteLine("==================================================");
            /*
            Loop Invariant:
            At the start of iteration i, 'sum' contains the sum of integers from 1 to (i - 1).
            At the end of iteration i, 'sum' contains the sum of integers from 1 to i.
            */
            int sum = 0;
            for (int i = 1; i <= 100; i++)
            {
                sum += i;
            }
            Console.WriteLine("Sum of 1 to 100 = " + sum); // Expected: 5050

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 4 — EVEN NUMBERS (2, 4, 6, 8, 10)");
            Console.WriteLine("==================================================");
            Console.WriteLine("Method 1 (i += 2 step update - fewer iterations):");
            for (int i = 2; i <= 10; i += 2)
            {
                Console.Write(i + " ");
            }
            Console.WriteLine("\nMethod 2 (i++ with modulo condition - inspects all numbers):");
            for (int i = 1; i <= 10; i++)
            {
                if (i % 2 == 0)
                {
                    Console.Write(i + " ");
                }
            }
            Console.WriteLine();

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 5 — SKIP MULTIPLES OF 3 (1 to 20 with continue)");
            Console.WriteLine("==================================================");
            for (int i = 1; i <= 20; i++)
            {
                if (i % 3 == 0)
                {
                    continue; // Skip rest of loop for multiples of 3
                }
                Console.Write(i + " ");
            }
            Console.WriteLine();

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 6 — STOP AT 42 (Linear Search with break)");
            Console.WriteLine("==================================================");
            int[] searchNumbers = { 10, 25, 7, 42, 99, 100 };
            foreach (int num in searchNumbers)
            {
                Console.WriteLine("Checking: " + num);
                if (num == 42)
                {
                    Console.WriteLine("-> FOUND 42! Breaking out of loop.");
                    break;
                }
            }

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 7 — COUNT POSITIVE NUMBERS");
            Console.WriteLine("==================================================");
            int[] values = { -2, 5, 0, 7, -9, 3 };
            int positiveCount = 0;
            foreach (int val in values)
            {
                if (val > 0)
                {
                    positiveCount++;
                }
            }
            Console.WriteLine("Given array: [-2, 5, 0, 7, -9, 3]");
            Console.WriteLine("Number of positive values (> 0): " + positiveCount); // Expected: 3

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 8 — FIND MAXIMUM (Manual Algorithm)");
            Console.WriteLine("==================================================");
            int[] dataset = { 12, 7, 45, 3, 98, 21 };
            int max = dataset[0]; // Initialize with first element
            for (int i = 1; i < dataset.Length; i++)
            {
                if (dataset[i] > max)
                {
                    max = dataset[i];
                }
            }
            Console.WriteLine("Dataset: [12, 7, 45, 3, 98, 21]");
            Console.WriteLine("Maximum value found: " + max); // Expected: 98

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 9 — MULTIPLICATION TABLE (5 x 1 to 10)");
            Console.WriteLine("==================================================");
            for (int i = 1; i <= 10; i++)
            {
                Console.WriteLine($"5 x {i} = {5 * i}");
            }

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 10 — NESTED LOOPS (Star Triangle Pattern)");
            Console.WriteLine("==================================================");
            int totalRows = 5;
            for (int row = 1; row <= totalRows; row++)
            {
                for (int col = 1; col <= row; col++)
                {
                    Console.Write("*");
                }
                Console.WriteLine();
            }

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 11 — FIND DUPLICATES (O(N^2) Nested Loops)");
            Console.WriteLine("==================================================");
            int[] dupArray = { 1, 2, 3, 2, 5, 1 };
            Console.WriteLine("Array: [1, 2, 3, 2, 5, 1]");
            Console.Write("Duplicates found: ");
            for (int i = 0; i < dupArray.Length; i++)
            {
                for (int j = i + 1; j < dupArray.Length; j++)
                {
                    if (dupArray[i] == dupArray[j])
                    {
                        Console.Write(dupArray[i] + " ");
                        break;
                    }
                }
            }
            Console.WriteLine();

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 12 — INPUT VALIDATION LOOP");
            Console.WriteLine("==================================================");
            // Validation rule: age >= 0 && age <= 150
            int[] simulatedInputs = { -5, 200, 25 };
            int inputIndex = 0;
            int validatedAge = -1;

            while (true)
            {
                int candidateAge = simulatedInputs[inputIndex++];
                Console.WriteLine($"Prompting user... Received input: {candidateAge}");

                if (candidateAge >= 0 && candidateAge <= 150)
                {
                    validatedAge = candidateAge;
                    Console.WriteLine($"-> Valid age accepted: {validatedAge}");
                    break;
                }
                else
                {
                    Console.WriteLine("-> Invalid age! Must be between 0 and 150. Retrying...");
                }
            }

            Console.WriteLine("\n==================================================");
            Console.WriteLine("EXERCISE 13 — SIMPLE RETRY SYSTEM");
            Console.WriteLine("==================================================");
            int maxAttempts = 3;
            bool operationSuccess = false;

            // Scenario A: Transient failure (succeeds on attempt 3)
            Console.WriteLine("--- Scenario A: Transient failure (succeeds on attempt 3) ---");
            for (int attempt = 1; attempt <= maxAttempts; attempt++)
            {
                Console.WriteLine($"Attempt {attempt} of {maxAttempts}...");
                if (attempt == 3)
                {
                    Console.WriteLine($"-> Operation succeeded on attempt {attempt}!");
                    operationSuccess = true;
                    break;
                }
                else
                {
                    Console.WriteLine("-> Operation failed.");
                }
            }
            if (!operationSuccess)
            {
                Console.WriteLine("FAILED");
            }

            // Scenario B: Permanent failure
            Console.WriteLine("\n--- Scenario B: Permanent failure ---");
            operationSuccess = false;
            for (int attempt = 1; attempt <= maxAttempts; attempt++)
            {
                Console.WriteLine($"Attempt {attempt} of {maxAttempts}...");
                Console.WriteLine("-> Operation failed.");
            }
            if (!operationSuccess)
            {
                Console.WriteLine("FAILED");
            }
        }
    }
}