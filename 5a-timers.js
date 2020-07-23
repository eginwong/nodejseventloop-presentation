/** 
 * How to grok when they all come together?
 * 
 * # Timers
 *   - setInterval(() => {}, 0)
 *     - next macro task, repeatedly calls after time period
 *   - setTimeout(() => {}, 1000)
 *     - next macro task, not before timeout period
 *     - returns Timeout objects to manipulate afterwards
 *   - setImmediate(() => {}) / requestAnimationFrame
 *     - next macro task, but depends on event loop phase
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

(function timers() {
  // comment out below to see the race condition
  // setInterval(() => { process.stdout.write("task: setInterval\n")}, 1000);

  setTimeout(() => { process.stdout.write("task: setTimeout\n")}, 0);
  setImmediate(() => process.stdout.write('task: setImmediate\n'));
  
})();
