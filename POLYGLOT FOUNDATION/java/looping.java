// VALUE BASED ITERATION
/*
for (String user : users) {
    System.out.println(user);
}
*/

public class looping {

    public static void main(String[] args) {
        System.out.println("==================================================");
        System.out.println("EXERCISE 1 — COUNTING (1 to 10)");
        System.out.println("==================================================");
        System.out.println("Using for loop:");
        for (int i = 1; i <= 10; i++) {
            System.out.print(i + " ");
        }
        System.out.println("\nUsing while loop:");
        int w = 1;
        while (w <= 10) {
            System.out.print(w + " ");
            w++;
        }
        System.out.println();

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 2 — REVERSE COUNTING (10 to 1)");
        System.out.println("==================================================");
        for (int i = 10; i >= 1; i--) {
            System.out.print(i + " ");
        }
        System.out.println();

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 3 — SUM OF NUMBERS (1 to 100)");
        System.out.println("==================================================");
        /*
        Loop Invariant:
        At the start of iteration i, 'sum' contains the sum of integers from 1 to (i - 1).
        At the end of iteration i, 'sum' contains the sum of integers from 1 to i.
        */
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            sum += i;
        }
        System.out.println("Sum of 1 to 100 = " + sum); // Expected: 5050

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 4 — EVEN NUMBERS (2, 4, 6, 8, 10)");
        System.out.println("==================================================");
        System.out.println("Method 1 (i += 2 step update - fewer iterations):");
        for (int i = 2; i <= 10; i += 2) {
            System.out.print(i + " ");
        }
        System.out.println("\nMethod 2 (i++ with modulo condition - inspects all numbers):");
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) {
                System.out.print(i + " ");
            }
        }
        System.out.println();

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 5 — SKIP MULTIPLES OF 3 (1 to 20 with continue)");
        System.out.println("==================================================");
        for (int i = 1; i <= 20; i++) {
            if (i % 3 == 0) {
                continue; // Skip rest of loop body for multiples of 3
            }
            System.out.print(i + " ");
        }
        System.out.println();

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 6 — STOP AT 42 (Linear Search with break)");
        System.out.println("==================================================");
        int[] searchNumbers = {10, 25, 7, 42, 99, 100};
        for (int num : searchNumbers) {
            System.out.println("Checking: " + num);
            if (num == 42) {
                System.out.println("-> FOUND 42! Breaking out of loop.");
                break;
            }
        }

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 7 — COUNT POSITIVE NUMBERS");
        System.out.println("==================================================");
        int[] values = {-2, 5, 0, 7, -9, 3};
        int positiveCount = 0;
        for (int val : values) {
            if (val > 0) {
                positiveCount++;
            }
        }
        System.out.println("Given array: [-2, 5, 0, 7, -9, 3]");
        System.out.println("Number of positive values (> 0): " + positiveCount); // Expected: 3

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 8 — FIND MAXIMUM (Manual Algorithm)");
        System.out.println("==================================================");
        int[] dataset = {12, 7, 45, 3, 98, 21};
        int max = dataset[0]; // Initialize with first element
        for (int i = 1; i < dataset.length; i++) {
            if (dataset[i] > max) {
                max = dataset[i];
            }
        }
        System.out.println("Dataset: [12, 7, 45, 3, 98, 21]");
        System.out.println("Maximum value found: " + max); // Expected: 98

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 9 — MULTIPLICATION TABLE (5 x 1 to 10)");
        System.out.println("==================================================");
        for (int i = 1; i <= 10; i++) {
            System.out.println("5 x " + i + " = " + (5 * i));
        }

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 10 — NESTED LOOPS (Star Triangle Pattern)");
        System.out.println("==================================================");
        int totalRows = 5;
        for (int row = 1; row <= totalRows; row++) {
            for (int col = 1; col <= row; col++) {
                System.out.print("*");
            }
            System.out.println();
        }

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 11 — FIND DUPLICATES (O(N^2) Nested Loops)");
        System.out.println("==================================================");
        int[] dupArray = {1, 2, 3, 2, 5, 1};
        System.out.println("Array: [1, 2, 3, 2, 5, 1]");
        System.out.print("Duplicates found: ");
        for (int i = 0; i < dupArray.length; i++) {
            for (int j = i + 1; j < dupArray.length; j++) {
                if (dupArray[i] == dupArray[j]) {
                    System.out.print(dupArray[i] + " ");
                    break;
                }
            }
        }
        System.out.println();

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 12 — INPUT VALIDATION LOOP");
        System.out.println("==================================================");
        // Valid range: age >= 0 && age <= 150
        // Simulated inputs queue: [-5, 200, 25]
        int[] simulatedInputs = {-5, 200, 25};
        int inputIndex = 0;
        int validatedAge = -1;

        while (true) {
            int candidateAge = simulatedInputs[inputIndex++];
            System.out.println("Prompting user... Received input: " + candidateAge);

            if (candidateAge >= 0 && candidateAge <= 150) {
                validatedAge = candidateAge;
                System.out.println("-> Valid age accepted: " + validatedAge);
                break;
            } else {
                System.out.println("-> Invalid age! Must be between 0 and 150. Retrying...");
            }
        }

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 13 — SIMPLE RETRY SYSTEM");
        System.out.println("==================================================");
        int maxAttempts = 3;
        boolean operationSuccess = false;

        // Test Scenario A: Fails 2 times, succeeds on attempt 3
        System.out.println("--- Scenario A: Transient failure (succeeds on attempt 3) ---");
        for (int attempt = 1; attempt <= maxAttempts; attempt++) {
            System.out.println("Attempt " + attempt + " of " + maxAttempts + "...");
            // Simulate operation success condition
            if (attempt == 3) {
                System.out.println("-> Operation succeeded on attempt " + attempt + "!");
                operationSuccess = true;
                break;
            } else {
                System.out.println("-> Operation failed.");
            }
        }
        if (!operationSuccess) {
            System.out.println("FAILED");
        }

        // Test Scenario B: All attempts fail
        System.out.println("\n--- Scenario B: Permanent failure ---");
        operationSuccess = false;
        for (int attempt = 1; attempt <= maxAttempts; attempt++) {
            System.out.println("Attempt " + attempt + " of " + maxAttempts + "...");
            // Never succeeds
            System.out.println("-> Operation failed.");
        }
        if (!operationSuccess) {
            System.out.println("FAILED");
        }
    }
}