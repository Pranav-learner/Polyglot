package main

import "fmt"

/*
GO

Important characteristics:

if

else

switch

No ternary

Strict boolean conditions

Short declarations inside if

Early returns

Go strongly encourages:

Simple

Explicit

Flat

control flow.
*/

type User struct {
	Name string
}

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
func classifyAge(age int) string {
	if age < 0 {
		return "Invalid Age"
	} else if age < 13 {
		return "Child"
	} else if age <= 17 {
		return "Teenager"
	} else if age <= 64 {
		return "Adult"
	} else {
		return "Senior"
	}
}

// ==========================================
// EXERCISE 2: LOGIN SYSTEM
// ==========================================
// 1. Nested Conditions
func loginNested(userExists bool, passwordCorrect bool, isBanned bool) string {
	if userExists {
		if passwordCorrect {
			if !isBanned {
				return "Login successful"
			} else {
				return "Reject: User is banned"
			}
		} else {
			return "Reject: Incorrect password"
		}
	} else {
		return "Reject: User does not exist"
	}
}

// 2. Guard Clauses (Idiomatic Go style: flat, early return)
func loginGuardClauses(userExists bool, passwordCorrect bool, isBanned bool) string {
	if !userExists {
		return "Reject: User does not exist"
	}
	if !passwordCorrect {
		return "Reject: Incorrect password"
	}
	if isBanned {
		return "Reject: User is banned"
	}
	return "Login successful"
}

// ==========================================
// EXERCISE 3: NULL / MISSING VALUE
// ==========================================
// Go Concept: 'nil' is the zero-value for pointers, interfaces, slices, maps, channels, functions.
// Dereferencing a nil pointer causes a runtime panic.
// Pattern: CHECK -> ACCESS
func checkAndAccessUser(user *User) {
	fmt.Print("Accessing user: ")
	if user != nil {
		// SAFE: Checked that pointer is not nil before dereferencing field
		fmt.Printf("User name is %s\n", user.Name)
	} else {
		fmt.Println("User is nil! Cannot access properties.")
	}
}

// ==========================================
// RUNNER & VERIFICATION
// ==========================================
func main() {
	fmt.Println("==================================================")
	fmt.Println("EXERCISE 1: AGE CLASSIFIER (Go)")
	fmt.Println("==================================================")
	testAges := []int{12, 13, 17, 18, 64, 65}
	for _, age := range testAges {
		fmt.Printf("Age %d -> %s\n", age, classifyAge(age))
	}

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 2: LOGIN SYSTEM (Go)")
	fmt.Println("==================================================")
	fmt.Println("--- Testing Nested Conditions ---")
	fmt.Println("Case 1 (No user):    ", loginNested(false, true, false))
	fmt.Println("Case 2 (Wrong pass): ", loginNested(true, false, false))
	fmt.Println("Case 3 (Banned):     ", loginNested(true, true, true))
	fmt.Println("Case 4 (Valid login):", loginNested(true, true, false))

	fmt.Println("\n--- Testing Guard Clauses (Refactored) ---")
	fmt.Println("Case 1 (No user):    ", loginGuardClauses(false, true, false))
	fmt.Println("Case 2 (Wrong pass): ", loginGuardClauses(true, false, false))
	fmt.Println("Case 3 (Banned):     ", loginGuardClauses(true, true, true))
	fmt.Println("Case 4 (Valid login):", loginGuardClauses(true, true, false))

	fmt.Println("\n==================================================")
	fmt.Println("EXERCISE 3: NULL / MISSING VALUE (Go)")
	fmt.Println("==================================================")
	validUser := &User{Name: "Pranav"}
	var nilUser *User = nil

	checkAndAccessUser(validUser)
	checkAndAccessUser(nilUser)
}
