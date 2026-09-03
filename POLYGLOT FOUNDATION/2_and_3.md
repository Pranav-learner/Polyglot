VOID FUNCTIONS

Some functions don't return useful data.

They perform an action.

Example:

sendEmail()

saveUser()

printMessage()

startGame()
Java
void printHello() {
    System.out.println("Hello");
}
TypeScript
function printHello(): void {
    console.log("Hello");
}
Go
func printHello() {
    fmt.Println("Hello")
}
C#
void PrintHello()
{
    Console.WriteLine("Hello");
}
Python
def print_hello():
    print("Hello")

Python functions without an explicit return produce None.

JavaScript
function printHello() {
    console.log("Hello");
}

JavaScript functions without an explicit return produce undefined.

PURE FUNCTION

A pure function generally has two important properties:

1. Same input → same output
add(10, 20)

↓

30

Every time.

2. No externally observable side effects

It doesn't:

Modify global state

Write a file

Change a database

Send an email

Print unnecessarily
PURE FUNCTION
INPUT

↓

FUNCTION

↓

OUTPUT

Nothing external changes.

FUNCTIONS IN DSA

Functions are essential for DSA.

Example:

search()

sort()

reverse()

merge()

partition()

DSA problems are often decomposed into helper functions.

Example:

solve()

    │
    ├── isValid()
    │
    ├── search()
    │
    └── process()

Later:

Recursion

will make functions even more important.

PART 24 — FUNCTIONS IN BACKEND

A backend request might look like:

HTTP Request
      │
      ▼
Controller
      │
      ▼
Service
      │
      ▼
Repository
      │
      ▼
Database

Each layer consists of functions.

Example:

createUser()

↓

validateUser()

↓

hashPassword()

↓

saveUser()

Functions are fundamental to:

Spring Boot

Node.js

FastAPI

.NET
PART 25 — FUNCTIONS IN AI

Python AI code might involve:

load_data()

clean_data()

create_features()

train_model()

evaluate_model()

Example pipeline:

DATA

↓

load_data()

↓

clean_data()

↓

train_model()

↓

evaluate_model()

Functions allow AI pipelines to remain understandable.

PART 26 — FUNCTIONS IN GAMES

Games have functions like:

Update()

Render()

MovePlayer()

CheckCollision()

ApplyDamage()

Conceptually:

GAME LOOP

    │
    ├── ReadInput()
    │
    ├── Update()
    │
    ├── Physics()
    │
    └── Render()

This will become very important in:

C#

Unity
PART 27 — FUNCTIONS IN GO / INFRASTRUCTURE

Infrastructure code might contain:

startServer()

handleConnection()

readMessage()

processMessage()

shutdownServer()

Functions allow us to separate:

Networking

Business Logic

Infrastructure

Concurrency

WHAT HAPPENS DURING A FUNCTION CALL?

1. Current function is executing.

2. Function call is encountered.

3. Arguments are prepared.

4. Execution enters called function.

5. Parameters receive argument values.

6. Function body executes.

7. Return value is produced.

8. Called function finishes.

9. Control returns to caller.

10. Caller continues execution.

                 FUNCTION EXECUTION
                         │
       ┌─────────────────┼─────────────────┐
       │                 │                 │
     Java              JS/TS            Python
       │                 │                 │
    JVM Frames       Call Stack         Frames
       │                 │                 │
       └─────────────────┼─────────────────┘
                         │
                    UNIVERSAL
                     CONCEPT
                         │
                Active Function Calls
                         │
                    Call Stack
                         │
                  Return Control
                         │
       ┌─────────────────┼─────────────────┐
       │                                   │
      Go                                  C#
       │                                   │
   Goroutine Stack                     .NET Stack
   Runtime Scheduler                   CLR / JIT


   WHAT IS RECURSION?

The simplest definition:

Recursion is when a function solves a problem by calling itself to solve a smaller version of the same problem.

THE MOST IMPORTANT IDEA

Recursion has two phases:

1. GOING DOWN
   ↓
   Recursive calls

2. COMING BACK
   ↑
   Returning / Unwinding

THE TWO ESSENTIAL PARTS OF RECURSION

Almost every recursive solution requires:

RECURSION
│
├── BASE CASE
│
└── RECURSIVE CASE
1. BASE CASE

The base case says:

Stop calling yourself.

Example:

If n == 0:

Stop.

Without a base case:

function()

↓

function()

↓

function()

↓

function()

↓

...

Eventually:

STACK OVERFLOW
2. RECURSIVE CASE

The recursive case says:

Reduce the problem and call the function again.

Example:

factorial(n)

↓

n × factorial(n - 1)

The important part:

n - 1

The problem is getting smaller.

THE UNIVERSAL STRUCTURE
function solve(problem):

    if problem is simple:
        solve directly

    otherwise:
        reduce problem

        call solve(smaller problem)

This is recursion.

THREE REQUIREMENTS OF CORRECT RECURSION

A correct recursive algorithm generally needs three things.

REQUIREMENT 1 — BASE CASE

You need a stopping condition.

Example:

n == 0
REQUIREMENT 2 — PROGRESS

Every recursive call must move toward the base case.

Example:

n

↓

n - 1

↓

n - 1

↓

n - 1

Eventually:

0
REQUIREMENT 3 — CORRECT RECURSIVE RELATION

The recursive call must correctly represent a smaller version of the original problem.

For factorial:

factorial(n)

=

n × factorial(n - 1)
THE THREE QUESTIONS

Whenever writing recursion, ask:

1. What is my base case?

2. How does the problem become smaller?

3. Why does the smaller problem correctly help solve the larger problem?

If you cannot answer these three questions, you probably do not yet understand the recursion.

THREE REQUIREMENTS OF CORRECT RECURSION

A correct recursive algorithm generally needs three things.

REQUIREMENT 1 — BASE CASE

You need a stopping condition.

Example:

n == 0
REQUIREMENT 2 — PROGRESS

Every recursive call must move toward the base case.

Example:

n

↓

n - 1

↓

n - 1

↓

n - 1

Eventually:

0
REQUIREMENT 3 — CORRECT RECURSIVE RELATION

The recursive call must correctly represent a smaller version of the original problem.

For factorial:

factorial(n)

=

n × factorial(n - 1)
THE THREE QUESTIONS

Whenever writing recursion, ask:

1. What is my base case?

2. How does the problem become smaller?

3. Why does the smaller problem correctly help solve the larger problem?

If you cannot answer these three questions, you probably do not yet understand the recursion.

                         RECURSION
                             │
              ┌──────────────┼──────────────┐
              │              │              │
          BASE CASE      RECURSIVE       CALL STACK
                            CASE
              │              │              │
             STOP         REDUCE          ACTIVE
                            │             CALLS
                            ▼
                     SMALLER PROBLEM
                            │
                            ▼
                      RECURSIVE CALL
                            │
                            ▼
                        BASE CASE
                            │
                            ▼
                        UNWINDING
                            │
                            ▼
                       FINAL ANSWER

STACK VS HEAP — FIRST COMPARISON
Stack	Heap
Related to function execution	Related to dynamically allocated objects/data
Organized around call frames	Stores dynamically managed data
Usually follows stack-like allocation	More flexible allocation
Function calls push frames	Objects can have independent lifetimes
Frames disappear when calls return	Objects may survive beyond a function
Limited	Usually larger than a thread's stack                       