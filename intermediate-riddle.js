// source: https://github.com/jasnell/broken-promises/blob/master/Part1/Puzzle/puzzle.js

const { promisify } = require('util');
const rx = require('rxjs');
const sleep = promisify(setTimeout);

async function bar(n, s, t) {
  setImmediate(() => process.stdout.write(s));
  await sleep(n);
  return t;
}

async function foo() {
  process.stdout.write('R');
  for (const m of await Promise.all([bar(20, 'A', 'A'), bar(10, 'V', 'N')]))
    process.stdout.write(m)
}

async function che(input) {
  setTimeout(() => Promise.resolve().then(() => {
    process.stdout.write(input);
  }), 100);
}

sleep(50).then(() => process.stdout.write('A'));

new Promise((res) => {
  process.stdout.write('T');
  res('N');
}).then((m) => process.stdout.write(m))
  .finally(() => process.stdout.write('O'));

queueMicrotask(() => process.stdout.write('T'));

process.nextTick(() => process.stdout.write('O'));

setTimeout(() => process.stdout.write('D'), 100);

setImmediate(() => process.stdout.write(' '));

process.stdout.write('O');

rx.of('E').subscribe(che);

foo();
