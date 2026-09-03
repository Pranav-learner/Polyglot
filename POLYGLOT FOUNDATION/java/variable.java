public class variable {
    public static void main(String[] args) {
        System.out.println("========== EXERCISE 1: Basic Values ==========");
        // Store: Age (20), Price (99.99), Name ("Pranav"), IsLearning (true)
        int age = 20;
        double price = 99.99;
        String name = "Pranav";
        boolean isLearning = true;

        System.out.println("Age: " + age);
        System.out.println("Price: " + price);
        System.out.println("Name: " + name);
        System.out.println("IsLearning: " + isLearning);

        System.out.println("\n========== EXERCISE 2: Declaration, Initialization, Assignment ==========");
        // DECLARE: allocate space and define type (local variables must be initialized before reading)
        int score;

        // INITIALIZE: first value assignment
        score = 0;
        System.out.println("After Initialization (score = 0): " + score);

        // REASSIGN: update existing variable with new value
        score = 10;
        System.out.println("After First Reassignment (score = 10): " + score);

        score = 20;
        System.out.println("After Second Reassignment (score = 20): " + score);

        System.out.println("\n========== EXERCISE 3: Type Inference ==========");
        // Explicit Type: programmer explicitly writes the type
        int explicitAge = 20;

        // Inferred Type: Java 10+ 'var' infers type at COMPILE TIME from RHS expression
        var inferredScore = 100; // Inferred as 'int' by javac at compile time

        System.out.println("Explicit Age (int): " + explicitAge);
        System.out.println("Inferred Score (var -> int): " + inferredScore);
        // Note: 'var' in Java is still statically typed! It is NOT dynamic typing.

        System.out.println("\n========== EXERCISE 4: Type Conversion ==========");
        // 20 -> "20" (int to String)
        int num = 20;
        String strFromNum = String.valueOf(num); // or Integer.toString(num)
        System.out.println("int 20 to String: \"" + strFromNum + "\" (Type: " + strFromNum.getClass().getSimpleName() + ")");

        // "20" -> 20 (String to int)
        String strNum = "20";
        int numFromStr = Integer.parseInt(strNum);
        System.out.println("String \"20\" to int: " + numFromStr);

        System.out.println("\n========== EXERCISE 5: Decimal Conversion ==========");
        // 10.9 (double) -> integer (int)
        double decimalVal = 10.9;
        int truncatedInt = (int) decimalVal; // Explicit narrowing cast
        System.out.println("Original double: " + decimalVal);
        System.out.println("Converted int (truncated): " + truncatedInt);
        System.out.println("Observation: The fractional part (.9) is lost/truncated, not rounded.");

        System.out.println("\n========== EXERCISE 6: Dynamic vs Static ==========");
        int staticValue = 10;
        System.out.println("staticValue (int): " + staticValue);

        // In Java (Statically Typed):
        // staticValue = "Hello";
        //
        // WHEN DOES THE ERROR OCCUR?
        // -> COMPILE TIME (javac).
        // The Java compiler checks types during compilation and refuses to emit bytecode:
        // "error: incompatible types: String cannot be converted to int"
        // The program never even executes.
        System.out.println("Java is Statically Typed: Reassigning a String to an int variable causes a COMPILE-TIME error.");
    }
}

/*
============================================================
CONCEPTUAL SUMMARY: JAVA VARIABLES & TYPES
============================================================

1. Type System:
   - Statically typed: Every variable has a type known at compile time.
   - Strongly typed: Types are strictly enforced without unsafe implicit casts.

2. Declaration & Initialization:
   - Declaration: `int score;` (tells compiler about the identifier and type).
   - Initialization: `score = 0;` (local variables must be initialized before reading).
   - Reassignment: `score = 20;` (overwrites value in the allocated memory slot).

3. Type Inference:
   - `var score = 100;` (Introduced in Java 10).
   - Type is inferred at COMPILE TIME. Once inferred, the type is fixed (cannot assign a String to it).

4. Conversion:
   - Explicit Casting: `(int) 10.9` -> 10 (narrowing, truncates fractional part).
   - Parsing/Formatting: `Integer.parseInt("20")` and `String.valueOf(20)`.

5. Error Phase:
   - Type errors occur at COMPILE TIME (javac), preventing bytecode (.class) generation.
============================================================
*/


/*
. JAVA

Important characteristics:

Strong static typing

Integer division

Pre/Post increment

Boolean conditions

&&

||

!

No ** operator

Math methods

String concatenation with +

Important equality distinction later:

==

vs

.equals()

for objects.
*/
