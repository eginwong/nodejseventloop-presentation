/** 
 * # Promises
 *   - promise.then(() => {})
 *   - async functions
 * NOTE: async/await pauses to let execution of promise occur synchronously, 
 *   but that also clears what's on the microtask queue.
 */

(async function microtaskQueues() {
    async function cheese() {
        return Promise.resolve().then(() => {
            process.stdout.write("MicroTQ #2: in an async function!\n");
        })
    }

    setTimeout(() => process.stdout.write("TQ\n"), 0);
    queueMicrotask(() => process.stdout.write("MicroTQ #1\n"));
    await cheese(); // regular execution
    Promise.resolve().then(() => process.stdout.write("MicroTQ #3\n"));
})();
