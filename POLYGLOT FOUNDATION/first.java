public class first {
    public static void main(String[] args) {
        int x = 42;
        System.out.println(x);
    }
}

/* Conceptually:

[ Your Java Code (.java) ]
           │
           │  (Lexer -> Parser/AST -> Type Check)
           ▼
     [ javac Compiler ]
           │
           ▼
 [ Java Bytecode (.class) ]  <-- THIS is an Intermediate Representation!
           │
═══════════╪══════════════════════════════════════════════════════════════
           ▼  (Runtime on user machine: JVM)
   ┌────────────────────────────────────────────────────────┐
   │                                                        │
   │  1. JVM Interpreter                                    │
   │     • Reads bytecode instruction-by-instruction.       │
   │     • Executes immediately (starts fast, runs slow).   │
   │     • Profiles code to spot "hot spots" (loops).       │
   │                                                        │
   │  2. JIT Compiler (Just-In-Time)                        │
   │     • Takes those hot bytecode sections.               │
   │     • Translates them into internal JVM IR (SSA form). │
   │     • Highly optimizes them for the local CPU.         │
   │     • Emits native Machine Code (0s and 1s).           │
   │                                                        │
   └────────────────────────────────────────────────────────┘
           │
           ▼
Machine Code
     │
     ↓
CPU

This is fundamentally different from simply compiling directly to one native executable.

0.2.18 — What Is Java Bytecode?

Java source isn't normally compiled directly into x86 machine instructions.

Instead, Java's compiler produces:

Bytecode

stored in .class files.

Conceptually:

Java
 ↓
Bytecode
 ↓
JVM

Bytecode is an intermediate instruction format designed for the JVM.

So Java's big abstraction is:

                 Java Program
                      │
                      ↓
                 Java Bytecode
                      │
                      ↓
                     JVM
                /             \
               ↓               ↓
           Windows          Linux
               │               │
               ↓               ↓
            CPU code         CPU code

This is one of the reasons Java can be portable across platforms.

0.2.19 — "Write Once, Run Anywhere"

The idea is approximately:

Java source
     ↓
bytecode
     ↓
JVM
     ↓
platform-specific execution

The JVM handles much of the platform-specific work.

So instead of your Java compiler needing to produce:

Windows x86
Linux x86
Linux ARM
macOS ARM
...

the JVM provides a common execution environment.

This is an enormous engineering idea.
*/