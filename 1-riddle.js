// source: https://github.com/jasnell/broken-promises/blob/master/Part1/Puzzle/puzzle.js

async function bar(n, s, t) {
  setImmediate(() => process.stdout.write(s));
  await new Promise((r, _) => setTimeout(() => r(), n));
  return t;
}

async function foo() {
  process.stdout.write('E');
  for (const m of await Promise.all([bar(20, 'Y', ':'), bar(10, ' ', ')')]))
    process.stdout.write(m)
}

queueMicrotask(() => process.stdout.write('J'));

process.nextTick(() => process.stdout.write('N'));

setImmediate(() => process.stdout.write('O'));

foo();
