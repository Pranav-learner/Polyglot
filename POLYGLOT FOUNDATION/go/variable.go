package main

import (
	"fmt"
	"reflect"
	"strconv"
)

func main() {
	fmt.Println("========== EXERCISE 1: Basic Values ==========")
	// Store: Age (20), Price (99.99), Name ("Pranav"), IsLearning (true)
	age := 20
	price := 99.99
	name := "Pranav"
	isLearning := true

	fmt.Printf("Age: %d (type: %T)\n", age, age)
	fmt.Printf("Price: %.2f (type: %T)\n", price, price)
	fmt.Printf("Name: %s (type: %T)\n", name, name)
	fmt.Printf("IsLearning: %t (type: %T)\n", isLearning, isLearning)

	fmt.Println("\n========== EXERCISE 2: Declaration, Initialization, Assignment ==========")
	// DECLARE: 'var score int' allocates and sets zero-value (0 for int)
	var score int
	fmt.Printf("After Declaration (score default zero-value): %d\n", score)

	// INITIALIZE: explicit assignment
	score = 0
	fmt.Printf("After Explicit Initialization (score = 0): %d\n", score)

	// REASSIGN: subsequent assignments
	score = 10
	fmt.Printf("After First Reassignment (score = 10): %d\n", score)

	score = 20
	fmt.Printf("After Second Reassignment (score = 20): %d\n", score)

	fmt.Println("\n========== EXERCISE 3: Type Inference ==========")
	// Explicit Type:
	var explicitAge int = 20

	// Inferred Type: short variable declaration ':=' infers type at compile time
	inferredScore := 100 // Inferred as 'int' by the Go compiler

	fmt.Printf("Explicit Age: %d (type: %v)\n", explicitAge, reflect.TypeOf(explicitAge))
	fmt.Printf("Inferred Score: %d (type: %v)\n", inferredScore, reflect.TypeOf(inferredScore))

	fmt.Println("\n========== EXERCISE 4: Type Conversion ==========")
	// 20 -> "20" (int to string)
	num := 20
	strFromNum := strconv.Itoa(num) // or fmt.Sprintf("%d", num)
	fmt.Printf("int 20 to string: \"%s\" (type: %T)\n", strFromNum, strFromNum)

	// "20" -> 20 (string to int)
	strNum := "20"
	numFromStr, err := strconv.Atoi(strNum)
	if err != nil {
		fmt.Println("Error converting string to int:", err)
	} else {
		fmt.Printf("string \"20\" to int: %d (type: %T)\n", numFromStr, numFromStr)
	}

	fmt.Println("\n========== EXERCISE 5: Decimal Conversion ==========")
	// 10.9 (float64) -> int
	decimalVal := 10.9
	intVal := int(decimalVal) // Explicit numeric conversion
	fmt.Printf("Original float64: %f\n", decimalVal)
	fmt.Printf("Converted int: %d\n", intVal)
	fmt.Println("Observation: The fractional part (.9) is truncated/discarded, not rounded.")

	fmt.Println("\n========== EXERCISE 6: Dynamic vs Static ==========")
	value := 10
	fmt.Printf("value: %d (type: %T)\n", value, value)

	// In Go (Statically Typed):
	// value = "Hello"
	//
	// WHEN DOES THE ERROR OCCUR?
	// -> COMPILE TIME.
	// The Go compiler rejects this during compilation:
	// "cannot use \"Hello\" (untyped string constant) as int value in assignment"
	// The executable binary is never built.
	fmt.Println("Go is Statically Typed: Reassigning a string to an int variable is caught at COMPILE TIME.")
}

/*
============================================================
CONCEPTUAL SUMMARY: GO VARIABLES & TYPES
============================================================

1. Type System:
   - Statically typed: Every variable has a fixed type at compile time.
   - Strictly typed: No automatic numeric widening/coercion (e.g. float64(intVal) required).

2. Declaration & Initialization:
   - `var score int` -> Automatically initialized to default zero-value (`0`).
   - Short declaration `:=` combines declaration and initialization with inference.

3. Type Inference:
   - `score := 100` infers `int` at compile time.
   - Go variables cannot change their type once declared.

4. Conversion:
   - `strconv.Itoa(20)`, `strconv.Atoi("20")`, `int(10.9)`.
   - Conversions must be explicitly stated.

5. Error Phase:
   - Type mismatches and unused variables are caught at COMPILE TIME.
============================================================
*/

/*
GO

Important characteristics:

Static typing

Explicit conversion

No ternary

Integer division

Strict boolean conditions

No operator overloading

x++

Special expression rules

Simple language philosophy

Go intentionally avoids some language features to maintain simplicity.
*/
