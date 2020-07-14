/** 
 * Event Loop concepts
 * 
 * - nextTick queues
 *   - process.nextTick
 */

// ==================NEXTTICK QUEUES================
function nextTickQueues() {
    
    function bar() {
        process.nextTick(() => process.stdout.write("NTQ #1\n"));
        process.stdout.write("TQ #1\n");
    }
    
    bar(); // regular execution
    queueMicrotask(() => process.stdout.write("MicroTQ #1\n")); // microtask
    process.nextTick(() => process.stdout.write("NTQ #2\n"));
    setTimeout(() => process.stdout.write("TQ #2\n"), 0); // timers
};

nextTickQueues();
