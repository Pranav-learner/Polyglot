"""
PYTHON

Important characteristics:

if

elif

else

Truthiness

and

or

not

match

Pattern matching

Python control flow is usually highly readable.
But indentation must be correct
"""

from typing import Optional


class User:
    def __init__(self, name: str):
        self.name = name


# ==========================================
# EXERCISE 1: AGE CLASSIFIER
# ==========================================
"""
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
"""
def classify_age(age: int) -> str:
    if age < 0:
        return "Invalid Age"
    elif age < 13:
        return "Child"
    elif age <= 17:
        return "Teenager"
    elif age <= 64:
        return "Adult"
    else:
        return "Senior"


# ==========================================
# EXERCISE 2: LOGIN SYSTEM
# ==========================================
# 1. Nested Conditions
def login_nested(user_exists: bool, password_correct: bool, is_banned: bool) -> str:
    if user_exists:
        if password_correct:
            if not is_banned:
                return "Login successful"
            else:
                return "Reject: User is banned"
        else:
            return "Reject: Incorrect password"
    else:
        return "Reject: User does not exist"


# 2. Guard Clauses (Clean, Linear Early Exits)
def login_guard_clauses(user_exists: bool, password_correct: bool, is_banned: bool) -> str:
    if not user_exists:
        return "Reject: User does not exist"
    if not password_correct:
        return "Reject: Incorrect password"
    if is_banned:
        return "Reject: User is banned"
    return "Login successful"


# ==========================================
# EXERCISE 3: NULL / MISSING VALUE
# ==========================================
# Python Concept: 'None' is a singleton object representing missing/null value.
# Idiomatic check uses identity operator: `is not None` / `is None`
# Pattern: CHECK -> ACCESS
def check_and_access_user(user: Optional[User]) -> None:
    print("Accessing user: ", end="")
    if user is not None:
        # SAFE: Checked that user is not None before accessing attribute
        print(f"User name is {user.name}")
    else:
        print("User is None! Cannot access properties.")


# ==========================================
# RUNNER & VERIFICATION
# ==========================================
if __name__ == "__main__":
    print("==================================================")
    print("EXERCISE 1: AGE CLASSIFIER (Python)")
    print("==================================================")
    test_ages = [12, 13, 17, 18, 64, 65]
    for age in test_ages:
        print(f"Age {age} -> {classify_age(age)}")

    print("\n==================================================")
    print("EXERCISE 2: LOGIN SYSTEM (Python)")
    print("==================================================")
    print("--- Testing Nested Conditions ---")
    print("Case 1 (No user):    ", login_nested(False, True, False))
    print("Case 2 (Wrong pass): ", login_nested(True, False, False))
    print("Case 3 (Banned):     ", login_nested(True, True, True))
    print("Case 4 (Valid login):", login_nested(True, True, False))

    print("\n--- Testing Guard Clauses (Refactored) ---")
    print("Case 1 (No user):    ", login_guard_clauses(False, True, False))
    print("Case 2 (Wrong pass): ", login_guard_clauses(True, False, False))
    print("Case 3 (Banned):     ", login_guard_clauses(True, True, True))
    print("Case 4 (Valid login):", login_guard_clauses(True, True, False))

    print("\n==================================================")
    print("EXERCISE 3: NULL / MISSING VALUE (Python)")
    print("==================================================")
    valid_user = User("Pranav")
    none_user = None

    check_and_access_user(valid_user)
    check_and_access_user(none_user)