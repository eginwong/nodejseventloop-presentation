# nodejs event loop code thoughts

1. start with riddle [-5->0]
2. what is event loop briefly [0->2]
3. list of building blocks [2->4]
4. question: importantly, what happens when they all get thrown together? how to grok? [4->6]
5. loupe tool [6->10]
6. explain each building block; slowly build up picture of callstack in riddle [10->30]
7. summary of mental model; end with walking through solution of the riddle stack by stack [35->40]
8. author [40->42]
9. Q&A; send off another riddle to ask for answers [42->50]


## side notes
- Scheduler is an execution context
  - when and where task is executed (immediately, setTimeout, process.nextTick, animation frame)
  - asapScheduler - microtask
  - asyncScheduler - setInterval
  - animationFrameScheduler - requestAnimationFrame/setImmediate
  - queueScheduler - trampoline scheduler, current event frame
  - null - default is synchronous/recursive
- time-related operators (debounceTime, timeout, windowtime, etc) all use asyncScheduler