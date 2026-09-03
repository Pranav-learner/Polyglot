/*
Java emphasizes:

Strongly typed conditions

if / else

switch

Modern switch expressions

Pattern matching evolution

Important future concepts:

instanceof

Pattern matching

switch expressions

sealed classes
*/

class User {
    String name;
    User(String name) {
        this.name = name;
    }
}

public class workflow {

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

    Boundary Values to Test: 12, 13, 17, 18, 64, 65
    */
    public static String classifyAge(int age) {
        if (age < 0) {
            return "Invalid Age";
        } else if (age < 13) {
            return "Child";
        } else if (age <= 17) {
            return "Teenager";
        } else if (age <= 64) {
            return "Adult";
        } else {
            return "Senior";
        }
    }

    // ==========================================
    // EXERCISE 2: LOGIN SYSTEM
    // ==========================================
    // 1. Nested Conditions (Pyramid of Doom)
    public static String loginNested(boolean userExists, boolean passwordCorrect, boolean isBanned) {
        if (userExists) {
            if (passwordCorrect) {
                if (!isBanned) {
                    return "Login successful";
                } else {
                    return "Reject: User is banned";
                }
            } else {
                return "Reject: Incorrect password";
            }
        } else {
            return "Reject: User does not exist";
        }
    }

    // 2. Guard Clauses (Clean, Linear Early Exits)
    public static String loginGuardClauses(boolean userExists, boolean passwordCorrect, boolean isBanned) {
        if (!userExists) {
            return "Reject: User does not exist";
        }
        if (!passwordCorrect) {
            return "Reject: Incorrect password";
        }
        if (isBanned) {
            return "Reject: User is banned";
        }
        return "Login successful";
    }

    // ==========================================
    // EXERCISE 3: NULL / MISSING VALUE
    // ==========================================
    // Java Concept: 'null' represents an unassigned reference.
    // Accessing members on null throws NullPointerException (NPE) at runtime.
    // Pattern: CHECK -> ACCESS
    public static void checkAndAccessUser(User user) {
        System.out.print("Accessing user: ");
        if (user != null) {
            // SAFE: check passed before accessing
            System.out.println("User name is " + user.name);
        } else {
            System.out.println("User is null! Cannot access properties.");
        }
    }

    public static void main(String[] args) {
        System.out.println("==================================================");
        System.out.println("EXERCISE 1: AGE CLASSIFIER (Java)");
        System.out.println("==================================================");
        int[] testAges = {12, 13, 17, 18, 64, 65};
        for (int age : testAges) {
            System.out.println("Age " + age + " -> " + classifyAge(age));
        }

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 2: LOGIN SYSTEM (Java)");
        System.out.println("==================================================");
        System.out.println("--- Testing Nested Conditions ---");
        System.out.println("Case 1 (No user):     " + loginNested(false, true, false));
        System.out.println("Case 2 (Wrong pass):   " + loginNested(true, false, false));
        System.out.println("Case 3 (Banned):       " + loginNested(true, true, true));
        System.out.println("Case 4 (Valid login):  " + loginNested(true, true, false));

        System.out.println("\n--- Testing Guard Clauses (Refactored) ---");
        System.out.println("Case 1 (No user):     " + loginGuardClauses(false, true, false));
        System.out.println("Case 2 (Wrong pass):   " + loginGuardClauses(true, false, false));
        System.out.println("Case 3 (Banned):       " + loginGuardClauses(true, true, true));
        System.out.println("Case 4 (Valid login):  " + loginGuardClauses(true, true, false));

        System.out.println("\n==================================================");
        System.out.println("EXERCISE 3: NULL / MISSING VALUE (Java)");
        System.out.println("==================================================");
        User validUser = new User("Pranav");
        User nullUser = null;

        checkAndAccessUser(validUser);
        checkAndAccessUser(nullUser);
    }
}
