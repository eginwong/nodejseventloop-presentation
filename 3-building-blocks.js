/** 
 * What actors do we have in manipulating the event loop?
 * 
 * # Timers
 *   - setImmediate(() => {}) / requestAnimationFrame(() => {})
 *   - setTimeout(() => {}, 0)
 *   - setInterval(() => {})
 * 
 * # Promises
 *   - promises.then(() => {})
 *   - async functions
 * 
 * # Observables
 *   - rxjs.subscribe(() => {}).then(() => {}) 
 *   - rx.animationFrameScheduler
 *   - rx.queueScheduler
 *   - rx.asyncScheduler
 *   - rx.asapScheduler
 * 
 * # Miscellaneous
 *   - queueMicrotasks, node 11+
 *   - process.nextTick()
 *   - regular execution
 *   - event callbacks
 * 
 */