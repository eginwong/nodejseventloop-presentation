// source: https://github.com/jasnell/broken-promises/blob/master/Part1/Puzzle/puzzle.js
const rx = require('rxjs');

Promise.resolve().then(() => process.stdout.write(" 1 "));

// >>>>>>>>promise: `process.stdout.write(" 1 ")`
// ---------------
// Microtask Queue (v8)

// ----------
// Console

setTimeout(() => process.stdout.write(" 2 "), 0);
setTimeout(() => process.stdout.write(" 3 "), 30);

// promise: `process.stdout.write(" 1 ")`
// ---------------
// Microtask Queue (v8)

// >>>>>>>>timeout, 30: `process.stdout.write(" 3 ")`
// >>>>>>>>timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// ----------
// Console

process.nextTick(() => process.stdout.write(" 4 "));

// >>>>>>>>nextTick: `process.stdout.write(" 4 ")`
// ---------------
// NextTick Queue (nodejs)

// promise: `process.stdout.write(" 1 ")`
// ---------------
// Microtask Queue (v8)

// timeout, 30: `process.stdout.write(" 3 ")`
// timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// ----------
// Console

queueMicrotask(() => process.stdout.write(" 5 ")); 

// nextTick: `process.stdout.write(" 4 ")`
// ---------------
// NextTick Queue (nodejs)

// >>>>>>>>queueMicrotask: `process.stdout.write(" 5 ")`
// promise: `process.stdout.write(" 1 ")`
// ---------------
// Microtask Queue (v8)

// timeout, 30: `process.stdout.write(" 3 ")`
// timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// ----------
// Console

setImmediate(() => process.stdout.write(" 6 "));

// nextTick: `process.stdout.write(" 4 ")`
// ---------------
// NextTick Queue (nodejs)

// queueMicrotask: `process.stdout.write(" 5 ")`
// promise: `process.stdout.write(" 1 ")`
// ---------------
// Microtask Queue (v8)

// timeout, 30: `process.stdout.write(" 3 ")`
// >>>>>>>>immediate, 0: `process.stdout.write(" 6 ")`
// timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// ----------
// Console

new Promise((res) => {
    process.stdout.write(" 7 ");
    res(" 8 ");
}).then((m) => process.stdout.write(m))
.finally(() => process.stdout.write(" 9 "));

// nextTick: `process.stdout.write(" 4 ")`
// ---------------
// NextTick Queue (nodejs)

// >>>>>>>>promise: `process.stdout.write(" 8 ")`, WHEN EXECUTED, add finally `process.stdout.write(" 9 ")`
// queueMicrotask: `process.stdout.write(" 5 ")`
// promise: `process.stdout.write(" 1 ")`
// ---------------
// Microtask Queue (v8)

// timeout, 30: `process.stdout.write(" 3 ")`
// immediate, 0: `process.stdout.write(" 6 ")`
// timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// >>>>>>>> 7 
// ----------
// Console

process.stdout.write(" 10 ");

// nextTick: `process.stdout.write(" 4 ")`
// ---------------
// NextTick Queue (nodejs)

// promise: `process.stdout.write(" 8 ")`, WHEN EXECUTED, add finally `process.stdout.write(" 9 ")`
// queueMicrotask: `process.stdout.write(" 5 ")`
// promise: `process.stdout.write(" 1 ")`
// ---------------
// Microtask Queue (v8)

// timeout, 30: `process.stdout.write(" 3 ")`
// immediate, 0: `process.stdout.write(" 6 ")`
// timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// >>>>>>>> 7  10  
// ----------
// Console

rx.of(" 11 ").subscribe((arr) => process.stdout.write(arr));

// nextTick: `process.stdout.write(" 4 ")`
// ---------------
// NextTick Queue (nodejs)

// promise: `process.stdout.write(" 8 ")`, WHEN EXECUTED, add finally `process.stdout.write(" 9 ")`
// queueMicrotask: `process.stdout.write(" 5 ")`
// promise: `process.stdout.write(" 1 ")`
// ---------------
// Microtask Queue (v8)

// timeout, 30: `process.stdout.write(" 3 ")`
// immediate, 0: `process.stdout.write(" 6 ")`
// timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// >>>>>>>> 7  10  11 
// ----------
// Console

rx.of(" 12 ").subscribe((_arr) => setTimeout(() => process.stdout.write(_arr), 10));

// nextTick: `process.stdout.write(" 4 ")`
// ---------------
// NextTick Queue (nodejs)

// promise: `process.stdout.write(" 8 ")`, WHEN EXECUTED, add finally `process.stdout.write(" 9 ")`
// queueMicrotask: `process.stdout.write(" 5 ")`
// promise: `process.stdout.write(" 1 ")`
// ---------------
// Microtask Queue (v8)

// timeout, 30: `process.stdout.write(" 3 ")`
// >>>>>>>>timeout, 10: `process.stdout.write(" 12 ")`
// immediate, 0: `process.stdout.write(" 6 ")`
// timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// 7  10  11 
// ----------
// Console

rx.of(" 13 ").subscribe((_arr) => setImmediate(() => process.stdout.write(_arr)));

// nextTick: `process.stdout.write(" 4 ")`
// ---------------
// NextTick Queue (nodejs)

// promise: `process.stdout.write(" 8 ")`, WHEN EXECUTED, add finally `process.stdout.write(" 9 ")`
// queueMicrotask: `process.stdout.write(" 5 ")`
// promise: `process.stdout.write(" 1 ")`
// ---------------
// Microtask Queue (v8)

// timeout, 30: `process.stdout.write(" 3 ")`
// timeout, 10: `process.stdout.write(" 12 ")`
// >>>>>>>>immediate, 0: `process.stdout.write(" 13 ")`
// immediate, 0: `process.stdout.write(" 6 ")`
// timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// 7  10  11 
// ----------
// Console

rx.of(" 14 ", rx.asapScheduler).subscribe((_arr) => process.stdout.write(_arr)); // microtask

// nextTick: `process.stdout.write(" 4 ")`
// ---------------
// NextTick Queue (nodejs)

// >>>>>>>>asapScheduler: `process.stdout.write(" 14 ")`
// promise: `process.stdout.write(" 8 ")`, WHEN EXECUTED, add finally `process.stdout.write(" 9 ")`
// queueMicrotask: `process.stdout.write(" 5 ")`
// promise: `process.stdout.write(" 1 ")`
// ---------------
// Microtask Queue (v8)

// timeout, 30: `process.stdout.write(" 3 ")`
// timeout, 10: `process.stdout.write(" 12 ")`
// immediate, 0: `process.stdout.write(" 13 ")`
// immediate, 0: `process.stdout.write(" 6 ")`
// timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// 7  10  11 
// ----------
// Console

rx.of(" 15 ", rx.queueScheduler).subscribe((_arr) => process.stdout.write(_arr)); // synchronous

// nextTick: `process.stdout.write(" 4 ")`
// ---------------
// NextTick Queue (nodejs)

// asapScheduler: `process.stdout.write(" 14 ")`
// promise: `process.stdout.write(" 8 ")`, WHEN EXECUTED, add finally `process.stdout.write(" 9 ")`
// queueMicrotask: `process.stdout.write(" 5 ")`
// promise: `process.stdout.write(" 1 ")`
// ---------------
// Microtask Queue (v8)

// timeout, 30: `process.stdout.write(" 3 ")`
// timeout, 10: `process.stdout.write(" 12 ")`
// immediate, 0: `process.stdout.write(" 13 ")`
// immediate, 0: `process.stdout.write(" 6 ")`
// timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// 7  10  11  15
// ----------
// Console

rx.of(" 16 ", rx.asyncScheduler).subscribe((_arr) => process.stdout.write(_arr)); // setInterval/setTimeout

// nextTick: `process.stdout.write(" 4 ")`
// ---------------
// NextTick Queue (nodejs)

// asapScheduler: `process.stdout.write(" 14 ")`
// promise: `process.stdout.write(" 8 ")`, WHEN EXECUTED, add finally `process.stdout.write(" 9 ")`
// queueMicrotask: `process.stdout.write(" 5 ")`
// promise: `process.stdout.write(" 1 ")`
// ---------------
// Microtask Queue (v8)

// timeout, 30: `process.stdout.write(" 3 ")`
// timeout, 10: `process.stdout.write(" 12 ")`
// immediate, 0: `process.stdout.write(" 13 ")`
// immediate, 0: `process.stdout.write(" 6 ")`
// >>>>>>>>asyncScheduler: `process.stdout.write(" 16 ")`
// timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// 7  10  11  15
// ----------
// Console

// ======================================================================

// ____nextTick: `process.stdout.write(" 4 ")`
// ---------------
// NextTick Queue (nodejs)

// asapScheduler: `process.stdout.write(" 14 ")`
// promise: `process.stdout.write(" 8 ")`, WHEN EXECUTED, add finally `process.stdout.write(" 9 ")`
// queueMicrotask: `process.stdout.write(" 5 ")`
// promise: `process.stdout.write(" 1 ")`
// ---------------
// Microtask Queue (v8)

// timeout, 30: `process.stdout.write(" 3 ")`
// timeout, 10: `process.stdout.write(" 12 ")`
// immediate, 0: `process.stdout.write(" 13 ")`
// immediate, 0: `process.stdout.write(" 6 ")`
// asyncScheduler: `process.stdout.write(" 16 ")`
// timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// 7  10  11  15  4 
// ----------
// Console

// ======================================================================

// asapScheduler: `process.stdout.write(" 14 ")`
// promise: `process.stdout.write(" 8 ")`, WHEN EXECUTED, add finally `process.stdout.write(" 9 ")`
// queueMicrotask: `process.stdout.write(" 5 ")`
// ____promise: `process.stdout.write(" 1 ")`
// ---------------
// Microtask Queue (v8)

// timeout, 30: `process.stdout.write(" 3 ")`
// timeout, 10: `process.stdout.write(" 12 ")`
// immediate, 0: `process.stdout.write(" 13 ")`
// immediate, 0: `process.stdout.write(" 6 ")`
// asyncScheduler: `process.stdout.write(" 16 ")`
// timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// 7  10  11  15  4  1 
// ----------
// Console

// ======================================================================

// asapScheduler: `process.stdout.write(" 14 ")`
// promise: `process.stdout.write(" 8 ")`, WHEN EXECUTED, add finally `process.stdout.write(" 9 ")`
// ____queueMicrotask: `process.stdout.write(" 5 ")`
// ---------------
// Microtask Queue (v8)

// timeout, 30: `process.stdout.write(" 3 ")`
// timeout, 10: `process.stdout.write(" 12 ")`
// immediate, 0: `process.stdout.write(" 13 ")`
// immediate, 0: `process.stdout.write(" 6 ")`
// asyncScheduler: `process.stdout.write(" 16 ")`
// timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// 7  10  11  15  4  1  5 
// ----------
// Console

// ======================================================================

// asapScheduler: `process.stdout.write(" 14 ")`
// ____promise: `process.stdout.write(" 8 ")`, WHEN EXECUTED, add finally `process.stdout.write(" 9 ")`
// ---------------
// Microtask Queue (v8)

// timeout, 30: `process.stdout.write(" 3 ")`
// timeout, 10: `process.stdout.write(" 12 ")`
// immediate, 0: `process.stdout.write(" 13 ")`
// immediate, 0: `process.stdout.write(" 6 ")`
// asyncScheduler: `process.stdout.write(" 16 ")`
// timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// 7  10  11  15  4  1  5  8 
// ----------
// Console

// ======================================================================

// >>>>>>>>finally: `process.stdout.write(" 9 ")`
// ____asapScheduler: `process.stdout.write(" 14 ")`
// ---------------
// Microtask Queue (v8)

// timeout, 30: `process.stdout.write(" 3 ")`
// timeout, 10: `process.stdout.write(" 12 ")`
// immediate, 0: `process.stdout.write(" 13 ")`
// immediate, 0: `process.stdout.write(" 6 ")`
// asyncScheduler: `process.stdout.write(" 16 ")`
// timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// 7  10  11  15  4  1  5  8  14 
// ----------
// Console

// ======================================================================

// ____finally: `process.stdout.write(" 9 ")`
// ---------------
// Microtask Queue (v8)

// timeout, 30: `process.stdout.write(" 3 ")`
// timeout, 10: `process.stdout.write(" 12 ")`
// immediate, 0: `process.stdout.write(" 13 ")`
// immediate, 0: `process.stdout.write(" 6 ")`
// asyncScheduler: `process.stdout.write(" 16 ")`
// timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// 7  10  11  15  4  1  5  8  14  9 
// ----------
// Console

// ======================================================================

// timeout, 30: `process.stdout.write(" 3 ")`
// timeout, 10: `process.stdout.write(" 12 ")`
// immediate, 0: `process.stdout.write(" 13 ")`
// immediate, 0: `process.stdout.write(" 6 ")`
// asyncScheduler: `process.stdout.write(" 16 ")`
// ____timeout, 0: `process.stdout.write(" 2 ")`
// ---------------
// Task Queue

// 7  10  11  15  4  1  5  8  14  9  2 
// ----------
// Console

// ======================================================================

// timeout, 30: `process.stdout.write(" 3 ")`
// timeout, 10: `process.stdout.write(" 12 ")`
// immediate, 0: `process.stdout.write(" 13 ")`
// immediate, 0: `process.stdout.write(" 6 ")`
// ____asyncScheduler: `process.stdout.write(" 16 ")`
// ---------------
// Task Queue

// 7  10  11  15  4  1  5  8  14  9  2  16 
// ----------
// Console

// ======================================================================

// timeout, 30: `process.stdout.write(" 3 ")`
// timeout, 10: `process.stdout.write(" 12 ")`
// immediate, 0: `process.stdout.write(" 13 ")`
// ____immediate, 0: `process.stdout.write(" 6 ")`
// ---------------
// Task Queue

// 7  10  11  15  4  1  5  8  14  9  2  16  6 
// ----------
// Console

// ======================================================================

// timeout, 30: `process.stdout.write(" 3 ")`
// timeout, 10: `process.stdout.write(" 12 ")`
// ____immediate, 0: `process.stdout.write(" 13 ")`
// ---------------
// Task Queue

// 7  10  11  15  4  1  5  8  14  9  2  16  6  13 
// ----------
// Console

// ======================================================================

// timeout, 30: `process.stdout.write(" 3 ")`
// ____timeout, 10: `process.stdout.write(" 12 ")`
// ---------------
// Task Queue

// 7  10  11  15  4  1  5  8  14  9  2  16  6  13  12 
// ----------
// Console

// ======================================================================

// ____timeout, 30: `process.stdout.write(" 3 ")`
// ---------------
// Task Queue

// 7  10  11  15  4  1  5  8  14  9  2  16  6  13  12  3 
// ----------
// Console

// ======================================================================
// FINAL ANSWER: 
// 7 10 11 15 4 1 5 8 14 9 2 16 6 13 12 3