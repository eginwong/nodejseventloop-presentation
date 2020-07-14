/** 
 * How to grok when they all come together?
 * 
 * # Timers
 * # Promises
 * # Observables
 * # Miscellaneous
 */

async function bar(n, s, t) {
  setImmediate(() => process.stdout.write(s)); // ?
  await new Promise((r, _) => setTimeout(() => r(), n)); // microtask queue, // ?
  return t;
}

async function foo() {
  process.stdout.write('E');
  for (const m of await Promise.all([bar(20, 'Y', ':'), bar(10, ' ', ')')])) // microtask queue
    process.stdout.write(m)
}

queueMicrotask(() => process.stdout.write('J')); // microtask queue

process.nextTick(() => process.stdout.write('N')); // nextTick queue

setImmediate(() => process.stdout.write('O')); // ?

foo();
