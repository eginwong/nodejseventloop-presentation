/** 
 * # Promises
 *   - promise.then(() => {})
 *   - async functions
 */

(async function microtaskQueues() {
    async function cheese() {
        return new Promise((resolve, reject) => {
            process.stdout.write("MicroTQ #2: in an async function!\n");
            resolve();
        })
    }

    setTimeout(() => process.stdout.write("TQ\n"), 0);
    queueMicrotask(() => process.stdout.write("MicroTQ #1\n"));
    await cheese(); // regular execution
    Promise.resolve().then(() => process.stdout.write("MicroTQ #3\n"));
})();
