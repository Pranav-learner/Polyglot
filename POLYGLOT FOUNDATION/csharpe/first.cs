namespace MyProgram {
    class Program {
        static void Main(string[] args) {
            int x = 42;
            System.Console.WriteLine(x);
        }
    }
}
/*
The entry point is:

Main()

But modern C# allows:

Console.WriteLine("Hello");

These are called top-level statements.

The compiler generates the necessary underlying structure.
*/

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
class User
{
    public string Name;
    public int Age;
}
// Nominal class with static types.

// taking input
string input = Console.ReadLine();