
---------------
NextTick Queue (nodejs)

---------------
Microtask Queue (v8)

---------------
Task Queue

----------
Call Stack

----------
Console

========================================

---------------
NextTick Queue (nodejs)

queueMicrotask: `process.stdout.write('J')`
---------------
Microtask Queue (v8)

---------------
Task Queue

----------
Call Stack

----------
Console

========================================

nextTick: `process.stdout.write('N')`
---------------
NextTick Queue (nodejs)

queueMicrotask: `process.stdout.write('J')`
---------------
Microtask Queue (v8)

---------------
Task Queue

----------
Call Stack

----------
Console

========================================

nextTick: `process.stdout.write('N')`
---------------
NextTick Queue (nodejs)

queueMicrotask: `process.stdout.write('J')`
---------------
Microtask Queue (v8)

immediate: `process.stdout.write('O')`
---------------
Task Queue

----------
Call Stack

----------
Console

========================================

nextTick: `process.stdout.write('N')`
---------------
NextTick Queue (nodejs)

queueMicrotask: `process.stdout.write('J')`
---------------
Microtask Queue (v8)

immediate: `process.stdout.write('O')`
---------------
Task Queue

foo()
----------
Call Stack

----------
Console

========================================

nextTick: `process.stdout.write('N')`
---------------
NextTick Queue (nodejs)

queueMicrotask: `process.stdout.write('J')`
---------------
Microtask Queue (v8)

immediate: `process.stdout.write('O')`
---------------
Task Queue

bar()
foo()
----------
Call Stack

'E'
----------
Console

========================================

nextTick: `process.stdout.write('N')`
---------------
NextTick Queue (nodejs)

queueMicrotask: `process.stdout.write('J')`
---------------
Microtask Queue (v8)

setTimeout: 20 THEN return promise for ":"
setTimeout: 10 THEN return promise for ")"
immediate: `process.stdout.write(' ')`
immediate: `process.stdout.write('Y')`
immediate: `process.stdout.write('O')`
---------------
Task Queue

bar()
foo()
----------
Call Stack

'E'
----------
Console

========================================

queueMicrotask: `process.stdout.write('J')`
---------------
Microtask Queue (v8)

setTimeout: 20 THEN return promise for ":"
setTimeout: 10 THEN return promise for ")"
immediate: `process.stdout.write(' ')`
immediate: `process.stdout.write('Y')`
immediate: `process.stdout.write('O')`
---------------
Task Queue

bar()
foo()
----------
Call Stack

'EN'
----------
Console

========================================

---------------
Microtask Queue (v8)

setTimeout: 20 THEN return promise for ":"
setTimeout: 10 THEN return promise for ")"
immediate: `process.stdout.write(' ')`
immediate: `process.stdout.write('Y')`
immediate: `process.stdout.write('O')`
---------------
Task Queue

bar()
foo()
----------
Call Stack

'ENJ'
----------
Console

========================================

setTimeout: 20 THEN return promise for ":"
setTimeout: 10 THEN return promise for ")"
immediate: `process.stdout.write(' ')`
immediate: `process.stdout.write('Y')`
immediate: `process.stdout.write('O')`
---------------
Task Queue

bar()
foo()
----------
Call Stack

'ENJ'
----------
Console

========================================

setTimeout: 20 THEN return promise for ":"
setTimeout: 10 THEN return promise for ")"
---------------
Task Queue

bar()
foo()
----------
Call Stack

'ENJOY '
----------
Console

========================================

promise: resolve() and then return ")"
---------------
Microtask Queue (v8)

setTimeout: 20 THEN return promise for ":"
---------------
Task Queue

foo()
----------
Call Stack

'ENJOY '
----------
Console

========================================

---------------
Microtask Queue (v8)

setTimeout: 20 THEN return promise for ":"
---------------
Task Queue

foo(), with promises on microtask[_pending, ")"]
----------
Call Stack

'ENJOY '
----------
Console

========================================

promise: resolve() and then return ":"
---------------
Microtask Queue (v8)

---------------
Task Queue

foo(), with promises on microtask[_pending, ")"]
----------
Call Stack

'ENJOY '
----------
Console

========================================

---------------
Microtask Queue (v8)

---------------
Task Queue

foo(), with promises on microtask[":", ")"]
----------
Call Stack

'ENJOY '
----------
Console

========================================

'ENJOY :)'
----------
Console
