
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

promise: setTimeout, 20 THEN return ":"
promise: setTimeout, 10 THEN return ")"
queueMicrotask: `process.stdout.write('J')`
---------------
Microtask Queue (v8)

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

promise: setTimeout, 20 THEN return ":"
promise: setTimeout, 10 THEN return ")"
queueMicrotask: `process.stdout.write('J')`
---------------
Microtask Queue (v8)

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

promise: setTimeout, 20 THEN return ":"
promise: setTimeout, 10 THEN return ")"
---------------
Microtask Queue (v8)

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

setTimeout, 20 THEN return ":"
setTimeout, 10 THEN return ")"
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

setTimeout, 20 THEN return ":"
setTimeout, 10 THEN return ")"
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
