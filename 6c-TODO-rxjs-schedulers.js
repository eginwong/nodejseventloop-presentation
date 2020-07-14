/** 
 * How to grok when they all come together?
 * 
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
// 

// Queue	            Executes task synchronously but waits for current task to be finished

setTimeout(() => { process.stdout.write("task: setTimeout\n")}, 0);
setInterval(() => { process.stdout.write("task: setInterval\n")}, 0);
setImmediate(() => process.stdout.write('O'));

// Asap	                    Schedules on the micro task queue
// Async	                Schedules on the macro task queue
// AnimationFrame	        Relies on ‘requestAnimationFrame’
// OMITTED: VirtualTime	    Will execute everything synchronous ordered by
