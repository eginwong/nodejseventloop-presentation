/** 
 * # Observables
 *   - rxjs.subscribe(() => {})
 *   - schedulers
 *     - rx.animationFrameScheduler
 *     - rx.queueScheduler
 *     - rx.asyncScheduler, FOR time-related operators (debounceTime, timeout, windowtime, etc)
 *     - rx.asapScheduler
 *     - rx.VirtualTimeScheduler (for testing only: call flush explicitly)
 *        - [ref](https://medium.com/angular-in-depth/so-what-is-rxjs-virtualtimescheduler-796e92ed722f)
 */

const rx = require('rxjs');
rx.of(" 11 ").subscribe((arr) => process.stdout.write(arr)); // default: current mAcrotask
rx.of(" 14 ", rx.asapScheduler).subscribe((_arr) => process.stdout.write(_arr)); // next mIcrotask
rx.of(" 15 ", rx.queueScheduler).subscribe((_arr) => process.stdout.write(_arr)); // current mAcrotask
rx.of(" 16 ", rx.asyncScheduler).subscribe((_arr) => process.stdout.write(_arr)); // next mAcrotask
