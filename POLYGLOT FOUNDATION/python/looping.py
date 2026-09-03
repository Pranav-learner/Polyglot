# VALUE BASED ITERATION
"""
for user in users:
    print(user)
"""

print("==================================================")
print("EXERCISE 1 — COUNTING (1 to 10)")
print("==================================================")
print("Using for loop:")
for i in range(1, 11):
    print(i, end=" ")
print()

print("Using while loop:")
w = 1
while w <= 10:
    print(w, end=" ")
    w += 1
print()

print("\n==================================================")
print("EXERCISE 2 — REVERSE COUNTING (10 to 1)")
print("==================================================")
# Note on Python range(start, stop, step):
# In range(10, 0, -1), the loop starts at 10, decrements by 1 each step,
# and stops BEFORE reaching 0 (because the stop boundary is exclusive: [10, 0)).
for i in range(10, 0, -1):
    print(i, end=" ")
print()

print("\n==================================================")
print("EXERCISE 3 — SUM OF NUMBERS (1 to 100)")
print("==================================================")
"""
Loop Invariant:
At the start of iteration i, 'total_sum' equals the sum of integers from 1 to (i - 1).
At the end of iteration i, 'total_sum' equals the sum of integers from 1 to i.
"""
total_sum = 0
for i in range(1, 101):
    total_sum += i
print(f"Sum of 1 to 100 = {total_sum}")  # Expected: 5050

print("\n==================================================")
print("EXERCISE 4 — EVEN NUMBERS (2, 4, 6, 8, 10)")
print("==================================================")
print("Method 1 (step = 2 in range - avoids checking odd numbers):")
for i in range(2, 11, 2):
    print(i, end=" ")
print()

print("Method 2 (iterate all numbers 1 to 10 with modulo check):")
for i in range(1, 11):
    if i % 2 == 0:
        print(i, end=" ")
print()

print("\n==================================================")
print("EXERCISE 5 — SKIP MULTIPLES OF 3 (1 to 20 with continue)")
print("==================================================")
for i in range(1, 21):
    if i % 3 == 0:
        continue  # Skip multiples of 3
    print(i, end=" ")
print()

print("\n==================================================")
print("EXERCISE 6 — STOP AT 42 (Linear Search with break)")
print("==================================================")
search_numbers = [10, 25, 7, 42, 99, 100]
for num in search_numbers:
    print(f"Checking: {num}")
    if num == 42:
        print("-> FOUND 42! Breaking out of loop.")
        break

print("\n==================================================")
print("EXERCISE 7 — COUNT POSITIVE NUMBERS")
print("==================================================")
values = [-2, 5, 0, 7, -9, 3]
positive_count = 0
for val in values:
    if val > 0:
        positive_count += 1
print(f"Given list: {values}")
print(f"Number of positive values (> 0): {positive_count}")  # Expected: 3

print("\n==================================================")
print("EXERCISE 8 — FIND MAXIMUM (Manual Algorithm)")
print("==================================================")
dataset = [12, 7, 45, 3, 98, 21]
max_val = dataset[0]  # Initialize with first item
for val in dataset[1:]:
    if val > max_val:
        max_val = val
print(f"Dataset: {dataset}")
print(f"Maximum value found: {max_val}")  # Expected: 98

print("\n==================================================")
print("EXERCISE 9 — MULTIPLICATION TABLE (5 x 1 to 10)")
print("==================================================")
for i in range(1, 11):
    print(f"5 x {i} = {5 * i}")

print("\n==================================================")
print("EXERCISE 10 — NESTED LOOPS (Star Triangle Pattern)")
print("==================================================")
total_rows = 5
for row in range(1, total_rows + 1):
    for col in range(1, row + 1):
        print("*", end="")
    print()

print("\n==================================================")
print("EXERCISE 11 — FIND DUPLICATES (O(N^2) Nested Loops)")
print("==================================================")
dup_list = [1, 2, 3, 2, 5, 1]
print(f"List: {dup_list}")
duplicates = []
for i in range(len(dup_list)):
    for j in range(i + 1, len(dup_list)):
        if dup_list[i] == dup_list[j]:
            duplicates.append(dup_list[i])
            break
print(f"Duplicates found: {' '.join(map(str, duplicates))}")

print("\n==================================================")
print("EXERCISE 12 — INPUT VALIDATION LOOP")
print("==================================================")
# Validation rules: age >= 0 and age <= 150
simulated_inputs = [-5, 200, 25]
input_index = 0
validated_age = -1

while True:
    candidate_age = simulated_inputs[input_index]
    input_index += 1
    print(f"Prompting user... Received input: {candidate_age}")

    if 0 <= candidate_age <= 150:
        validated_age = candidate_age
        print(f"-> Valid age accepted: {validated_age}")
        break
    else:
        print("-> Invalid age! Must be between 0 and 150. Retrying...")

print("\n==================================================")
print("EXERCISE 13 — SIMPLE RETRY SYSTEM")
print("==================================================")
max_attempts = 3

# Scenario A: Succeeds on attempt 3
print("--- Scenario A: Transient failure (succeeds on attempt 3) ---")
operation_success = False
for attempt in range(1, max_attempts + 1):
    print(f"Attempt {attempt} of {max_attempts}...")
    if attempt == 3:
        print(f"-> Operation succeeded on attempt {attempt}!")
        operation_success = True
        break
    else:
        print("-> Operation failed.")

if not operation_success:
    print("FAILED")

# Scenario B: Permanent failure
print("\n--- Scenario B: Permanent failure ---")
operation_success = False
for attempt in range(1, max_attempts + 1):
    print(f"Attempt {attempt} of {max_attempts}...")
    print("-> Operation failed.")

if not operation_success:
    print("FAILED")