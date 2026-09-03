package main

import "fmt"

func main() {
	x := 42
	fmt.Println(x)
}

/*
Conceptually:

Go Source
    │
    ↓
Go Compiler
    │
    ↓
Intermediate representations
    │
    ↓
Machine Code
    │
    ↓
Executable
    │
    ↓
Operating System
    │
    ↓
CPU

But don't make the mistake of thinking:

"Go has no runtime."

Go does have a runtime.

The Go runtime provides important functionality such as:

Garbage collection
Goroutine scheduling
Stack management
Synchronization support
Runtime services

So:

Go
 ↓
Native machine code
 +
Go runtime
 ↓
CPU

This distinction will become very important when we study Go concurrency.
*/

type User struct {
    Name string
    Age int
}
// Struct with explicit field types.