let x: number = 42;
console.log(x);
export{};  // js and ts file in same directory so the x varible waaas repeating , so we this file as module ,, by writing export{}

/*
The TypeScript compiler performs type checking and transforms TypeScript into JavaScript.

Conceptually:

TypeScript
    │
    ↓
Parser
    │
    ↓
AST
    │
    ↓
Type checking
    │
    ↓
JavaScript
    │
    ↓
JavaScript engine
    │
    ↓
JIT / execution
    │
    ↓
CPU

This is an extremely important mental model.

The CPU doesn't know:

number
interface
type
generic
union

from TypeScript.

Those are primarily compile-time concepts.
*/
