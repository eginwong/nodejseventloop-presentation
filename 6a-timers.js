/** 
 * How to grok when they all come together?
 * 
 * # Timers
 * - returns Timeout objects to manipulate afterwards
 *   - setTimeout(() => {}, 0)
 *     - next macro task, not before timeout period
 *   - setImmediate(() => {}) / requestAnimationFrame
 *     - next macro task, but depends on event loop phase
 *   - setInterval(() => {}, 0)
 *     - next macro task, repeatedly calls after time period
 * 
 * [ref](https://stackoverflow.com/questions/24117267/nodejs-settimeoutfn-0-vs-setimmediatefn/24119936#24119936)
 * 
 * ┌───────────────────────────┐
┌─>│ timers (Timeout/Interval) │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │ poll (until check/timers) │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │    check (setImmediate)   │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
 */

setImmediate(() => process.stdout.write('task: setImmediate\n'));
setTimeout(() => { process.stdout.write("task: setTimeout\n")}, 0);

// comment out below to see the race condition
setInterval(() => { process.stdout.write("task: setInterval\n")}, 1000);
