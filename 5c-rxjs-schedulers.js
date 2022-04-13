/** 
 * # Observables
 *   - rxjs.subscribe(() => {})
 *   - schedulers
 *     - rx.queueScheduler, current synchronous execution
 *     - rx.asyncScheduler, next macrotask; FOR time-related operators (debounceTime, timeout, windowtime, etc)
 *     - rx.asapScheduler, next microtask
 * 
 *     - rx.animationFrameScheduler, similar to setImmediate()
 *     - rx.VirtualTimeScheduler (for testing only: call flush explicitly)
 *        - [ref](https://medium.com/angular-in-depth/so-what-is-rxjs-virtualtimescheduler-796e92ed722f)
 */

const rx = require('rxjs');

(function schedulers() {
    rx.of(" a ")
        .subscribe((arr) => process.stdout.write(arr)); // default: current synchronous execution
    
    rx.of(" b ", rx.asapScheduler)
        .subscribe((_arr) => process.stdout.write(_arr)); // next microtask
    
    rx.of(" c ", rx.queueScheduler)
        .subscribe((_arr) => process.stdout.write(_arr)); // current synchronous execution
    
    rx.of(" d ", rx.asyncScheduler)
        .subscribe((_arr) => process.stdout.write(_arr)); // next macrotask
})();
