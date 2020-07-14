/** 
 * # Promises
 *   - promise.then(() => {})
 *   - async functions
 */

(async function microtaskQueues() {
    // microtasks slot in between tasks, so microtask queue runs multiple times per queue execution
    
    async function cheese() {
        return new Promise((resolve, reject) => {
            process.stdout.write("MicroTQ #2: in an async function!\n");
            resolve();
        })
    }

    setTimeout(() => process.stdout.write("TQ\n"), 0);
    await cheese(); // regular execution
    queueMicrotask(() => process.stdout.write("MicroTQ #1\n"));
    Promise.resolve().then(() => process.stdout.write("MicroTQ #3\n"));
})();