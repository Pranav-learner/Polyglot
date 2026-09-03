package main

import "fmt"

// VALUE BASED ITERATION
/*
for _, user := range users {
    fmt.Println(user)
}
*/

func main() {
	fmt.Println("==================================================")
	fmt.Println("EXERCISE 1 — COUNTING (1 to 10)")
	fmt.Println("==================================================")
	fmt.Println("Using 3-component for loop:")
	for i := 1; i <= 10; i++ {
		fmt.Printf("%d ", i)
	}
	fmt.Println("\nUsing for-as-while loop:")
	w := 1
	for w <= 10 { // Go expresses 'while' using 'for <condition>'
		fmt.Printf("%d ", w)
		w++
	}
	fmt.Println()

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 2 — REVERSE COUNTING (10 to 1)")
	fmt.Println("==================================================")
	for i := 10; i >= 1; i-- {
		fmt.Printf("%d ", i)
	}
	fmt.Println()

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 3 — SUM OF NUMBERS (1 to 100)")
	fmt.Println("==================================================")
	/*
	Loop Invariant:
	At the start of iteration i, 'sum' contains the sum of integers from 1 to (i - 1).
	At the end of iteration i, 'sum' contains the sum of integers from 1 to i.
	*/
	sum := 0
	for i := 1; i <= 100; i++ {
		sum += i
	}
	fmt.Printf("Sum of 1 to 100 = %d\n", sum) // Expected: 5050

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 4 — EVEN NUMBERS (2, 4, 6, 8, 10)")
	fmt.Println("==================================================")
	fmt.Println("Method 1 (i += 2 step update):")
	for i := 2; i <= 10; i += 2 {
		fmt.Printf("%d ", i)
	}
	fmt.Println("\nMethod 2 (i++ with modulo condition):")
	for i := 1; i <= 10; i++ {
		if i%2 == 0 {
			fmt.Printf("%d ", i)
		}
	}
	fmt.Println()

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 5 — SKIP MULTIPLES OF 3 (1 to 20 with continue)")
	fmt.Println("==================================================")
	for i := 1; i <= 20; i++ {
		if i%3 == 0 {
			continue // Skip rest of loop for multiples of 3
		}
		fmt.Printf("%d ", i)
	}
	fmt.Println()

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 6 — STOP AT 42 (Linear Search with break)")
	fmt.Println("==================================================")
	searchNumbers := []int{10, 25, 7, 42, 99, 100}
	for _, num := range searchNumbers {
		fmt.Printf("Checking: %d\n", num)
		if num == 42 {
			fmt.Println("-> FOUND 42! Breaking out of loop.")
			break
		}
	}

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 7 — COUNT POSITIVE NUMBERS")
	fmt.Println("==================================================")
	values := []int{-2, 5, 0, 7, -9, 3}
	positiveCount := 0
	for _, val := range values {
		if val > 0 {
			positiveCount++
		}
	}
	fmt.Printf("Given slice: %v\n", values)
	fmt.Printf("Number of positive values (> 0): %d\n", positiveCount) // Expected: 3

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 8 — FIND MAXIMUM (Manual Algorithm)")
	fmt.Println("==================================================")
	dataset := []int{12, 7, 45, 3, 98, 21}
	max := dataset[0] // Initialize with first element
	for _, val := range dataset[1:] {
		if val > max {
			max = val
		}
	}
	fmt.Printf("Dataset: %v\n", dataset)
	fmt.Printf("Maximum value found: %d\n", max) // Expected: 98

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 9 — MULTIPLICATION TABLE (5 x 1 to 10)")
	fmt.Println("==================================================")
	for i := 1; i <= 10; i++ {
		fmt.Printf("5 x %d = %d\n", i, 5*i)
	}

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 10 — NESTED LOOPS (Star Triangle Pattern)")
	fmt.Println("==================================================")
	totalRows := 5
	for row := 1; row <= totalRows; row++ {
		for col := 1; col <= row; col++ {
			fmt.Print("*")
		}
		fmt.Println()
	}

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 11 — FIND DUPLICATES (O(N^2) Nested Loops)")
	fmt.Println("==================================================")
	dupSlice := []int{1, 2, 3, 2, 5, 1}
	fmt.Printf("Slice: %v\n", dupSlice)
	fmt.Print("Duplicates found: ")
	for i := 0; i < len(dupSlice); i++ {
		for j := i + 1; j < len(dupSlice); j++ {
			if dupSlice[i] == dupSlice[j] {
				fmt.Printf("%d ", dupSlice[i])
				break
			}
		}
	}
	fmt.Println()

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 12 — INPUT VALIDATION LOOP")
	fmt.Println("==================================================")
	// Validation rule: age >= 0 && age <= 150
	simulatedInputs := []int{-5, 200, 25}
	inputIndex := 0
	validatedAge := -1

	for {
		candidateAge := simulatedInputs[inputIndex]
		inputIndex++
		fmt.Printf("Prompting user... Received input: %d\n", candidateAge)

		if candidateAge >= 0 && candidateAge <= 150 {
			validatedAge = candidateAge
			fmt.Printf("-> Valid age accepted: %d\n", validatedAge)
			break
		} else {
			fmt.Println("-> Invalid age! Must be between 0 and 150. Retrying...")
		}
	}

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 13 — SIMPLE RETRY SYSTEM")
	fmt.Println("==================================================")
	maxAttempts := 3

	// Scenario A: Succeeds on attempt 3
	fmt.Println("--- Scenario A: Transient failure (succeeds on attempt 3) ---")
	operationSuccess := false
	for attempt := 1; attempt <= maxAttempts; attempt++ {
		fmt.Printf("Attempt %d of %d...\n", attempt, maxAttempts)
		if attempt == 3 {
			fmt.Printf("-> Operation succeeded on attempt %d!\n", attempt)
			operationSuccess = true
			break
		} else {
			fmt.Println("-> Operation failed.")
		}
	}
	if !operationSuccess {
		fmt.Println("FAILED")
	}

	// Scenario B: Permanent failure
	fmt.Println("\n--- Scenario B: Permanent failure ---")
	operationSuccess = false
	for attempt := 1; attempt <= maxAttempts; attempt++ {
		fmt.Printf("Attempt %d of %d...\n", attempt, maxAttempts)
		fmt.Println("-> Operation failed.")
	}
	if !operationSuccess {
		fmt.Println("FAILED")
	}
}
