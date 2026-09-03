package main

import (
	"fmt"
	"strings"
)

/*
GO

Go emphasizes simplicity.

Functions are first-class.

Later:

Multiple return values

Named return values

Variadic functions

Closures

defer

Go's multiple return values are particularly important for:

Error handling
*/

type User struct {
	Name     string
	IsActive bool
	Role     string
}

// Package-level (global) variable
var globalMessage = "I am a Package/Global variable in Go"

// Starter Function: Calculate Final Price
func calculateFinalPrice(price float64, discountPercentage float64) float64 {
	return price - (price * discountPercentage / 100)
}

// ==========================================
// EXERCISE 6 — FUNCTION COMPOSITION
// ==========================================
func calculateSubtotal(unitPrice float64, quantity int) float64 {
	return unitPrice * float64(quantity)
}

func calculateTax(subtotal float64, taxRatePercentage float64) float64 {
	return subtotal * (taxRatePercentage / 100.0)
}

func calculateTotal(unitPrice float64, quantity int, taxRatePercentage float64) float64 {
	subtotal := calculateSubtotal(unitPrice, quantity)
	tax := calculateTax(subtotal, taxRatePercentage)
	return subtotal + tax
}

// ==========================================
// EXERCISE 7 — PURE VS IMPURE
// ==========================================
// Pure Function: deterministic (same input -> same output), zero side effects
func calculateSquare(number int) int {
	return number * number
}

// Impure Function: performs I/O side effect (writing to stdout)
func calculateAndPrintSquare(number int) int {
	result := number * number
	fmt.Printf("[Side Effect: Console I/O] Square of %d is %d\n", number, result)
	return result
}

// ==========================================
// EXERCISE 8 — EARLY RETURN
// ==========================================
func getAccessLevel(user *User) string {
	// Rule 1: No user (nil pointer) -> "No Access"
	if user == nil {
		return "No Access"
	}
	// Rule 2: Inactive user -> "No Access"
	if !user.IsActive {
		return "No Access"
	}
	// Rule 3: Admin -> "Admin"
	if strings.EqualFold(user.Role, "admin") {
		return "Admin"
	}
	// Rule 4: Otherwise -> "User"
	return "User"
}

// ==========================================
// EXERCISE 9 — SCOPE EXPERIMENT
// ==========================================
func demonstrateScope() {
	// Function-level variable (local to demonstrateScope)
	functionVar := "I am a Function-level variable in Go"
	fmt.Println("Inside function ->", globalMessage)
	fmt.Println("Inside function ->", functionVar)

	if true {
		// Block-level variable
		blockVar := "I am a Block-level variable in Go"
		fmt.Println("Inside block    ->", blockVar)
		fmt.Println("Inside block can see functionVar ->", functionVar)
	}
	// blockVar is not accessible here (Go compiler error: undefined: blockVar)
}

// ==========================================
// EXERCISE 10 — MUTATION EXPERIMENT
// ==========================================
// Primitive / value type passed by value (copy)
func modifyPrimitive(num int) {
	num = 999 // Only modifies local copy
}

// Pointer / reference type passed by pointer (dereference mutates heap struct)
func modifyObject(user *User) {
	if user != nil {
		user.Name = "Mutated Name"
	}
}

func main() {
	fmt.Println("==================================================")
	fmt.Println("STARTER: calculateFinalPrice")
	fmt.Println("==================================================")
	fmt.Printf("Final price (100 with 15%% discount): %.2f\n", calculateFinalPrice(100, 15))

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 6 — FUNCTION COMPOSITION")
	fmt.Println("==================================================")
	unitPrice := 50.0
	quantity := 3
	taxRate := 8.0 // 8%
	total := calculateTotal(unitPrice, quantity, taxRate)
	fmt.Printf("Subtotal (50 x 3): %.2f\n", calculateSubtotal(unitPrice, quantity))
	fmt.Printf("Tax (8%% on 150):   %.2f\n", calculateTax(150, taxRate))
	fmt.Printf("Total (Composed):  %.2f\n", total)

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 7 — PURE VS IMPURE")
	fmt.Println("==================================================")
	fmt.Println("Pure output:  ", calculateSquare(5))
	fmt.Print("Impure output: ")
	calculateAndPrintSquare(5)

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 8 — EARLY RETURN (getAccessLevel)")
	fmt.Println("==================================================")
	adminUser := &User{Name: "Alice", IsActive: true, Role: "admin"}
	standardUser := &User{Name: "Bob", IsActive: true, Role: "user"}
	inactiveAdmin := &User{Name: "Charlie", IsActive: false, Role: "admin"}
	var nullUser *User = nil

	fmt.Println("Admin User:     ", getAccessLevel(adminUser))      // Expected: Admin
	fmt.Println("Standard User:  ", getAccessLevel(standardUser))   // Expected: User
	fmt.Println("Inactive Admin: ", getAccessLevel(inactiveAdmin))  // Expected: No Access
	fmt.Println("Null User:      ", getAccessLevel(nullUser))       // Expected: No Access

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 9 — SCOPE EXPERIMENT")
	fmt.Println("==================================================")
	demonstrateScope()

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 10 — MUTATION EXPERIMENT")
	fmt.Println("==================================================")
	originalNumber := 42
	modifyPrimitive(originalNumber)
	fmt.Println("Primitive after modifyPrimitive (expected 42):", originalNumber)

	testUser := &User{Name: "Original Name", IsActive: true, Role: "user"}
	modifyObject(testUser)
	fmt.Println("User name after modifyObject (expected 'Mutated Name'):", testUser.Name)
}
