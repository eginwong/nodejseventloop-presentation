/** 
 * # Promises
 *   - promise.then(() => {})
 *   - async functions
 */

// go on the microtasks queue

// 1. pushes callback onto m
setTimeout(() => { process.stdout.write("task: setTimeout\n")}, 0);
setInterval(() => { process.stdout.write("task: setInterval\n")}, 0);
setImmediate(() => process.stdout.write('O'));

// process.stdout.write('E');

// foo();