x = 42
print(x)

'''
With the most common implementation, CPython, the conceptual model is roughly:

Python Source
      │
      ↓
Tokenizer / Parser
      │
      ↓
AST
      │
      ↓
Python Bytecode
      │
      ↓
CPython Virtual Machine
      │
      ↓
Machine Instructions

So Python is not simply "interpreted line by line" in the simplistic sense often taught to beginners.

CPython performs compilation to bytecode as part of its normal execution process.

0.2.21 — Python's .pyc

CPython can produce cached bytecode files such as:

__pycache__/

containing .pyc files.

So conceptually:

.py
 ↓
bytecode
 ↓
CPython VM

Again, this is why:

"Python is interpreted."

is an oversimplification.

A better statement is:

Python is a language; CPython is a common implementation that compiles Python code to bytecode and executes it using its runtime machinery.
'''

class User:
      def __init__(self,name,age):   # can also define the types of the arguments
            self.name = name
            self.age = age

# Runtime object with dynamic attributes.
#Annotations assist tooling.