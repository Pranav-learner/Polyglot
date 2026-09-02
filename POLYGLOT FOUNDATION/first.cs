namespace MyProgram {
    class Program {
        static void Main(string[] args) {
            int x = 42;
            System.Console.WriteLine(x);
        }
    }
}

/*
Conceptually:

C# Source
    │
    ↓
C# Compiler
    │
    ↓
IL / Intermediate Language
    │
    ↓
.NET / CLR
    │
    ├── JIT
    │
    ↓
Machine Code
    │
    ↓
CPU

So Java and C# have a fascinating similarity:

Java                     C#

Source                   Source
  ↓                        ↓
Bytecode                 IL
  ↓                        ↓
JVM                      CLR
  ↓                        ↓
JIT                      JIT
  ↓                        ↓
Machine code             Machine code

We'll exploit this comparison heavily later.
*/
