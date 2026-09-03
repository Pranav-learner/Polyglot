print("========== EXERCISE 1: Basic Values ==========")
# Store: Age (20), Price (99.99), Name ("Pranav"), IsLearning (true)
age = 20
price = 99.99
name = "Pranav"
is_learning = True

print(f"Age: {age} (type: {type(age).__name__})")
print(f"Price: {price} (type: {type(price).__name__})")
print(f"Name: {name} (type: {type(name).__name__})")
print(f"IsLearning: {is_learning} (type: {type(is_learning).__name__})")

print("\n========== EXERCISE 2: Declaration, Initialization, Assignment ==========")
# In Python, variables do not have separate uninitialized declaration syntax.
# Creating a variable is assigning an object reference in the namespace.
score = 0  # Initial binding
print(f"After Initialization (score = 0): {score}")

score = 10  # Reassignment (rebinding reference)
print(f"After First Reassignment (score = 10): {score}")

score = 20  # Reassignment
print(f"After Second Reassignment (score = 20): {score}")

print("\n========== EXERCISE 3: Type Inference / Dynamic Typing ==========")
# Python is dynamically typed.
# Type hints (e.g., `age: int = 20`) exist for static analyzers (mypy/IDEs),
# but the CPython runtime does not enforce them or perform static type inference.
explicit_annotated_age: int = 20  # Type hint annotation
inferred_score = 100               # Dynamic binding

print(f"explicit_annotated_age: {explicit_annotated_age} | runtime type: {type(explicit_annotated_age).__name__}")
print(f"inferred_score: {inferred_score} | runtime type: {type(inferred_score).__name__}")

print("\n========== EXERCISE 4: Type Conversion ==========")
# 20 -> "20" (int to str)
num = 20
str_from_num = str(num)
print(f"int 20 to str: '{str_from_num}' (type: {type(str_from_num).__name__})")

# "20" -> 20 (str to int)
str_num = "20"
num_from_str = int(str_num)
print(f"str '20' to int: {num_from_str} (type: {type(num_from_str).__name__})")

print("\n========== EXERCISE 5: Decimal Conversion ==========")
# 10.9 (float) -> int
decimal_val = 10.9
int_val = int(decimal_val)  # int() truncates towards zero
print(f"Original float: {decimal_val}")
print(f"Converted int: {int_val}")
print("Observation: The fractional part (.9) is truncated/discarded, not rounded.")

print("\n========== EXERCISE 6: Dynamic vs Static ==========")
value = 10
print(f"value: {value} | type: {type(value).__name__}")

# Dynamic reassignment to a string:
value = "Hello"
print(f"value: {value} | type: {type(value).__name__}")

# WHEN DOES AN ERROR OCCUR?
# -> NO ERROR!
# Python is dynamically typed. Variable names are simply labels bound to objects.
# At RUNTIME, the label 'value' is rebound from the int object (10) to the str object ("Hello").
print("Python is Dynamically Typed: Reassignment to a different type happens seamlessly at RUNTIME.")

"""
============================================================
CONCEPTUAL SUMMARY: PYTHON VARIABLES & TYPES
============================================================

1. Type System:
   - Dynamically typed: Types belong to objects in memory, not variable names.
   - Strongly typed: Does not automatically coerce incompatible types (e.g. '5' + 2 raises TypeError).

2. Declaration & Initialization:
   - Variables are created upon first assignment (`score = 0`).
   - Reassignment rebinds the name to a new object.

3. Type Inference / Annotations:
   - Type annotations (`x: int = 10`) are optional metadata, not runtime constraints.

4. Conversion:
   - Explicit conversion constructors: `str(20)`, `int('20')`, `int(10.9)`.
   - `int(10.9)` truncates decimal portion to 10.

5. Error Phase:
   - Dynamic type mismatch errors (e.g. `10 + "hello"`) occur at RUNTIME (TypeError).
============================================================
"""

"""
PYTHON

Important characteristics:

and

or

not

Truthiness

//

**

No ++

No --

is

==

Rich operator behavior

Python operators become even more powerful later because classes can define behavior for operators.
"""