/** 
 * Event Loop concepts
 * 
 * - microtask queues
 *   - Promises
 *   - MutationObserver API, watch for changes in DOM tree very specific
 *   - queueMicrotasks
 * - microtasks always prioritized over event loop phases
 */

// =================MICROTASK QUEUES================
(function microtaskQueues() {
    // microtasks slot in between tasks, so microtask queue runs multiple times per queue execution
    
    function bar() {
        process.stdout.write("TQ #1\n");
    }
    
    bar(); // regular execution
    queueMicrotask(() => process.stdout.write("MicroTQ #1\n"));
    queueMicrotask(() => queueMicrotask(() => process.stdout.write("MicroTQ #2\n")));
    Promise.resolve().then(() => process.stdout.write("MicroTQ #3\n"));
    setTimeout(() => process.stdout.write("TQ #2\n"), 0); // timers
})();
