/** 
 * Event Loop concepts
 * 
 * - task queues
 *   - regular execution
 *   - event callback // element.addListener(), but node is sync and UI is async
 *   - timers (covered later)
 */

// ===================TASK QUEUES===================
(function taskQueues() {
    const EventEmitter = require('events');
    
    const emitter = new EventEmitter();
    emitter.on("evt", () => process.stdout.write("TQ #2\n"));
    
    function foo() {
        process.stdout.write("TQ #1\n");
    }
    
    foo(); // regular execution
    emitter.emit("evt"); // event callback
})();
