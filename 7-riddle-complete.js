/**
 * Mental Model Complete
 * 
 * Let's go solve that riddle!
 * - [mental model](7a-riddle-complete-call-stack.md)
 */

async function bar(n, s, t) {
  setImmediate(() => process.stdout.write(s)); // next available task (timers) queue
  await new Promise((r, _) => setTimeout(() => r(), n)); // microtask queue, // next available task (timers) queue
  return t;
}

async function foo() {
  process.stdout.write('E');
  for (const m of await Promise.all([bar(20, 'Y', ':'), bar(10, ' ', ')')])) // microtask queue
    process.stdout.write(m)
}

queueMicrotask(() => process.stdout.write('J')); // microtask queue

process.nextTick(() => process.stdout.write('N')); // nextTick queue

setImmediate(() => process.stdout.write('O')); // next available task (timers) queue

foo();
