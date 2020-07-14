/** 
 * How to grok when they all come together?
 * 
 * # Timers
 * - returns Timeout objects to manipulate afterwards
 *   - setImmediate(() => {})
 *     - immediate before next macro task??
 *   - setTimeout(() => {}, 0)
 *     - next macro task, not before timeout period
 *   - setInterval(() => {}, 0)
 *     - repeatedly calls after time period
 */

 // [ref](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#process-nexttick)
// timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
// pending callbacks: executes I/O callbacks deferred to the next loop iteration.
// idle, prepare: only used internally.
// poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
// check: setImmediate() callbacks are invoked here.
// close callbacks: some close callbacks, e.g. socket.on('close', ...).

setImmediate(() => process.stdout.write('task: setImmediate\n'));
setTimeout(() => { process.stdout.write("task: setTimeout\n")}, 0);
setInterval(() => { process.stdout.write("task: setInterval\n")}, 1000);
