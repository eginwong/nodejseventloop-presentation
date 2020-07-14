/** 
 * Event Loop concepts
 * 
 * - task queues
 *   - event callbacktimers
 *   - regular execution
 *   - timers
 */

// ===================TASK QUEUES===================
(function taskQueues() {
    const EventEmitter = require('events');
    
    const emitter = new EventEmitter();
    emitter.on("evt", () => process.stdout.write("TQ #3\n"));
    
    function foo() {
        process.stdout.write("TQ #1\n");
    }
    
    foo(); // regular execution
    setTimeout(() => process.stdout.write("TQ #2\n")); // timers
    emitter.emit("evt"); // event callback
    
    // Q?
})();
