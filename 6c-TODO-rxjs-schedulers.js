/** 
 * # Observables
 *   - rxjs.subscribe(() => {})
 *   - schedulers
 *     - rx.animationFrameScheduler
 *     - rx.queueScheduler
 *     - rx.asyncScheduler
 *     - rx.asapScheduler
 *     - rx.VirtualTimeScheduler (for testing only: call flush explicitly)
 *        - [ref](https://medium.com/angular-in-depth/so-what-is-rxjs-virtualtimescheduler-796e92ed722f)
 */

// Queue	            Executes task synchronously but waits for current task to be finished

rx.of(" 11 ").subscribe((arr) => process.stdout.write(arr)); // default: current macrotask
rx.of(" 14 ", rx.asapScheduler).subscribe((_arr) => process.stdout.write(_arr)); // next microtask
rx.of(" 15 ", rx.queueScheduler).subscribe((_arr) => process.stdout.write(_arr)); // current macrotask
rx.of(" 16 ", rx.asyncScheduler).subscribe((_arr) => process.stdout.write(_arr)); // next macrotask


// Asap	                    Schedules on the micro task queue
// Async	                Schedules on the macro task queue
// AnimationFrame	        Relies on ‘requestAnimationFrame’
// OMITTED: VirtualTime	    Will execute everything synchronous ordered by
