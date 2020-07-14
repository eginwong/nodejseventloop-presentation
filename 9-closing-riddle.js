// inspiration: https://github.com/jasnell/broken-promises/blob/master/Part1/Puzzle/puzzle.js
const rx = require('rxjs');

Promise.resolve().then(() => process.stdout.write(" 1 "));

setTimeout(() => process.stdout.write(" 2 "), 0);
setTimeout(() => process.stdout.write(" 3 "), 30);

process.nextTick(() => process.stdout.write(" 4 "));

queueMicrotask(() => process.stdout.write(" 5 ")); 
setImmediate(() => process.stdout.write(" 6 "));

new Promise((res) => {
    process.stdout.write(" 7 ");
    res(" 8 ");
}).then((m) => process.stdout.write(m))
.finally(() => process.stdout.write(" 9 "));

process.stdout.write(" 10 ");

rx.of(" 11 ").subscribe((arr) => process.stdout.write(arr)); 
rx.of(" 12 ").subscribe((_arr) => setTimeout(() => process.stdout.write(_arr), 10)); 
rx.of(" 13 ").subscribe((_arr) => setImmediate(() => process.stdout.write(_arr))); 
rx.of(" 14 ", rx.asapScheduler).subscribe((_arr) => process.stdout.write(_arr));
rx.of(" 15 ", rx.queueScheduler).subscribe((_arr) => process.stdout.write(_arr));
rx.of(" 16 ", rx.asyncScheduler).subscribe((_arr) => process.stdout.write(_arr));
