let x: number = 42;
console.log(x);
export{};  // js and ts file in same directory so the x varible waaas repeating , so we this file as module ,, by writing export{}
/*
But TypeScript generally becomes JavaScript before runtime execution.

TypeScript
     ↓
TypeScript Compiler
     ↓
JavaScript
     ↓
JavaScript Runtime

Important:

TypeScript does not have its own standard production runtime like Java or C#.
*/

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

interface User {
    name: string;
    age: number;
}
// Interface can describe shape.