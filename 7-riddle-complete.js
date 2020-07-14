/**
 * Mental Model Complete.
 * 
 * Let's go solve that riddle!
 * 
 */

async function bar(n, s, t) {
    // ?
    setImmediate(() => process.stdout.write(s));
    // microtask queue, // ?
    await new Promise((r, _) => setTimeout(() => r(), n));
    return t;
}

async function foo() {
    process.stdout.write('E');
    // microtask queue
    for (const m of await Promise.all([bar(20, 'Y', ':'), bar(10, ' ', ')')]))
        process.stdout.write(m)
}

// microtask queue
queueMicrotask(() => process.stdout.write('J'));

// nextTick queue
process.nextTick(() => process.stdout.write('N'));

// ?
setImmediate(() => process.stdout.write('O'));

foo();