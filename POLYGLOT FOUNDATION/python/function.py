"""
PYTHON

Python functions are concise and flexible.

Python strongly encourages readable decomposition.

Later:

Default arguments

Keyword arguments

*args

**kwargs

Decorators

Generators
"""

from typing import Optional


class User:
    def __init__(self, name: str, is_active: bool, role: str):
        self.name = name
        self.is_active = is_active
        self.role = role


# Global scope variable
global_message = "I am a Global variable in Python"


# Starter Function: Calculate Final Price
def calculate_final_price(price: float, discount_percentage: float) -> float:
    return price - (price * discount_percentage / 100)


# ==========================================
# EXERCISE 6 — FUNCTION COMPOSITION
# ==========================================
def calculate_subtotal(unit_price: float, quantity: int) -> float:
    return unit_price * quantity


def calculate_tax(subtotal: float, tax_rate_percentage: float) -> float:
    return subtotal * (tax_rate_percentage / 100.0)


def calculate_total(unit_price: float, quantity: int, tax_rate_percentage: float) -> float:
    subtotal = calculate_subtotal(unit_price, quantity)
    tax = calculate_tax(subtotal, tax_rate_percentage)
    return subtotal + tax


# ==========================================
# EXERCISE 7 — PURE VS IMPURE
# ==========================================
# Pure Function: deterministic, zero side effects
def calculate_square(number: int) -> int:
    return number * number


# Impure Function: performs I/O side effect (writing to stdout)
def calculate_and_print_square(number: int) -> int:
    result = number * number
    print(f"[Side Effect: Console I/O] Square of {number} is {result}")
    return result


# ==========================================
# EXERCISE 8 — EARLY RETURN
# ==========================================
def get_access_level(user: Optional[User]) -> str:
    # Rule 1: No user -> "No Access"
    if user is None:
        return "No Access"
    # Rule 2: Inactive user -> "No Access"
    if not user.is_active:
        return "No Access"
    # Rule 3: Admin -> "Admin"
    if user.role.lower() == "admin":
        return "Admin"
    # Rule 4: Otherwise -> "User"
    return "User"


# ==========================================
# EXERCISE 9 — SCOPE EXPERIMENT
# ==========================================
def demonstrate_scope() -> None:
    # Function-level variable (local to demonstrate_scope)
    function_var = "I am a Function-level variable in Python"
    print("Inside function ->", global_message)
    print("Inside function ->", function_var)

    if True:
        # Note: Python does NOT create a new scope for `if` or `for` blocks!
        block_var = "I am inside an 'if' block (still in function scope in Python)"

    print("Outside block in function ->", block_var)


# ==========================================
# EXERCISE 10 — MUTATION EXPERIMENT
# ==========================================
# Primitive/immutable data passed by value/assignment (int, float, str, tuple)
def modify_primitive(num: int) -> None:
    num = 999  # Rebinds local name 'num' only


# Mutable object passed by reference/assignment (modifying attributes mutates heap object)
def modify_object(user: Optional[User]) -> None:
    if user is not None:
        user.name = "Mutated Name"


if __name__ == "__main__":
    print("==================================================")
    print("STARTER: calculate_final_price")
    print("==================================================")
    print("Final price (100 with 15% discount):", calculate_final_price(100, 15))

    print("\n==================================================")
    print("EXERCISE 6 — FUNCTION COMPOSITION")
    print("==================================================")
    unit_price = 50.0
    quantity = 3
    tax_rate = 8.0  # 8%
    total = calculate_total(unit_price, quantity, tax_rate)
    print("Subtotal (50 x 3):", calculate_subtotal(unit_price, quantity))
    print("Tax (8% on 150):  ", calculate_tax(150, tax_rate))
    print("Total (Composed): ", total)

    print("\n==================================================")
    print("EXERCISE 7 — PURE VS IMPURE")
    print("==================================================")
    print("Pure output:  ", calculate_square(5))
    print("Impure output: ", end="")
    calculate_and_print_square(5)

    print("\n==================================================")
    print("EXERCISE 8 — EARLY RETURN (get_access_level)")
    print("==================================================")
    admin_user = User("Alice", True, "admin")
    standard_user = User("Bob", True, "user")
    inactive_admin = User("Charlie", False, "admin")
    null_user = None

    print("Admin User:     ", get_access_level(admin_user))      # Expected: Admin
    print("Standard User:  ", get_access_level(standard_user))   # Expected: User
    print("Inactive Admin: ", get_access_level(inactive_admin))  # Expected: No Access
    print("Null User:      ", get_access_level(null_user))       # Expected: No Access

    print("\n==================================================")
    print("EXERCISE 9 — SCOPE EXPERIMENT")
    print("==================================================")
    demonstrate_scope()

    print("\n==================================================")
    print("EXERCISE 10 — MUTATION EXPERIMENT")
    print("==================================================")
    original_number = 42
    modify_primitive(original_number)
    print("Primitive after modify_primitive (expected 42):", original_number)

    test_user = User("Original Name", True, "user")
    modify_object(test_user)
    print("User name after modify_object (expected 'Mutated Name'):", test_user.name)