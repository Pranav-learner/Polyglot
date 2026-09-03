let x = 42
console.log(x)
/*
JavaScript executes top-level statements.

Conceptually:

JavaScript Engine
        ↓
Execute Script
        ↓
Top → Bottom

In a browser:

Browser
 ↓
JavaScript Engine
 ↓
Execute Script

In Node.js:

Node.js
 ↓
JavaScript Engine
 ↓
Execute Script
*/

/*
A modern JavaScript engine such as V8 doesn't simply read one line and execute it directly.

Conceptually:

JavaScript Source
       │
       ↓
Parser
       │
       ↓
AST
       │
       ↓
Internal representation / bytecode
       │
       ↓
Interpreter
       │
       ↓
JIT compilation
       │
       ↓
Optimized machine code
       │
       ↓
CPU

The exact internal implementation is much more sophisticated, but this is the mental model you need.

0.2.23 — JavaScript Has a JIT

Modern JavaScript engines use:

Just-In-Time compilation

The engine can observe how code behaves while running.

For example, if:

function add(a, b) {
    return a + b;
}

is repeatedly called with numbers:

add(10, 20);
add(30, 40);
add(50, 60);

the engine can gather runtime information and optimize execution.

This is one of the reasons modern JavaScript can be surprisingly fast.
*/