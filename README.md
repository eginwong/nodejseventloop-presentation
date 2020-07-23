# Node.js Event Loop Presentation

1. start with riddle [-5->0]
2. what is event loop briefly [0->13]
3. list of building blocks [13->15]
4. question: importantly, what happens when they all get thrown together? how to grok? [15->16]
5. explain each building block; slowly build up picture of callstack in riddle [16->40]
6. summary of mental model; end with walking through solution of the riddle stack by stack [40->45]
7. author [45->46]
8. loupe tool [46->47]
9. Q&A; send off another riddle to ask for answers [47->50]

## Presentation Tips
- zen mode (Ctrl + K, Z)
- remove git lens (disable extension)
- watch out for keyboard shortcuts when doing live-demo!
- call stack is properly ordered (add highest priority at top of file)
- add new sections over the presentation
```md
# Highest Priority



--------------- 
# NextTick Queue 
  (nodejs/not in browser)
  (nextTick)



---------------
# MacroTask Queue
  (execution, event callback)
```
- pop callstack for callback
