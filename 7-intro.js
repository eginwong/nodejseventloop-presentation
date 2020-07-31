/** 
 * Event Loop: Timers / Promises / Observables
 * 
 * @eginwong
 * https://github.com/eginwong
 * Senior Consultant with Avanade, 2020
 * 
 *                                                               ```````````````````
 *                             ````.....````                  `````````````````````
 *                           `./ossooossssso+/-..```         ``````````````````````
 *                          `./sysyyhhhhhddddmdhhyo/-````  ````````````````````````
 *                         `./syyyyyyhdhhddddddmddddds:.```````````````````````````
 *                        `.+ssssyydddhddddddddmmmmmmmdy/-`````````````````````````
 *                     ```:ososyyhhyyyhdddddddddddmmmmmdyy+-.``````````````````````
 * `````````````````````-+ooooooshdhhddddhhhyysssyhyyyddhhyyo:```````````..........
 *                    `:ossyssyyyyyyssyys+/:----://:::/oyhyhyso----::::////+++oooss
 *         `  ```````./osyyssyso++/////:..`````````````.:oyyhysyooshddddmmmmmmmmmmm
 * ```........----:::+shy+:///:---.-..``````` ```````````-syhdyhyoosydddddddddddddd
 * /////////////////+syy/-......```.````      `  ````````./shddddy+/ohhhhhhhhhhhhhh
 * ------------...-oyyso:..```````````````````   ``````...:oyhdddho/+yyyyyyyyyyyyyy
 * ............``.-oysss/..```````````````       `````....:osyhhhhs//syyyyyssssssss
 * ```````````````.oyyys/..````````` `  `        ```````.../sssssys//osssssoooooooo
 * ```````````````.oydy+-..```````````````````   `````````..:ooosyy::+oooooooooo+++
 * ````````````````+hd+-..``````..---..``..:////:---..````...:osoyy/-+ooo++++++++++
 * ````````````````/hy:...`.---:/+osso/.`./ooo+/-....-......../ssyy--/ooo++++++++++
 *                `.yy:..--------:/++++-..-////////:-----....-/osyo..:+o+++++++++++
 *      ````````````/oss/---/o+syy++:/+:.-+--:+:oys://:--oo//++oo/../o:++++++++++++
 * ```````````````...+oo:.`.----::..`.h+/+y-``.--:-..````/:...-o+-:::s//+++++++++++
 * ...............-o///+-`````.....``+o.``+o.``.....`````/...-:/:o+.`--++++++++++++
 * :::::::::::::::::-::/-.`````.....:s`    /:...........-/..-:/:.s/.``:++++++++++++
 * ::::::::::::::::-.-:.--.------:::/.`     .:::-----------:://:+s-``.+o+++++++++++
 * :::::::::::::::::...---.......---` ````````.--......---:////+y:``./oo+++++++++++
 * :::::::::::::::::-.`.---..`````..-//:-::/o/-.``.```..::////oy:``.:+o++++++++++++
 * ::::::::::::::::::-..---..``````-oyyoooosys+-`````..--://:/o/::://++++++++++++++
 * :::::::::::::::::::-::--..```````-----:-....``````...--:::o/:::///++++++++++++++
 * :::::::::::::::::::::---..``````````````````````````..-::+o:::::/+++++++++++++++
 * :::::::::::::::::::::::-..``````.--:::::/://:-..```..-://s:::::://++++++++++++++
 * ::::::::::::::::::::::::-..```.-/++/:::::::::/:-...-:///o+:::::://++++++++++++++
 * :::::::::::::::::::::::::::-..-:::////://+++/:---:-//+++s/:::::://++++++++++++++
 * :::::::::::::::::::::::::://::---/+oosssoo++::-:-:/+oo+//o:::::://++++///////+//
 * ::::::::::::::::---------:/++/:-----::::::---...-+ssoo/:-+:::::::///:::---::::::
 * :::-----------------------:/+o+/:-://+++/:::--:+ossso+:--:+::::::/:::-----------
 * ---------------------------:/+ooooo++::-:::/+ossssso/-....+:-:::////////////////
 * ...................---------::/+ossssssooossyyyyso+/-......+-:/+osssssssssssssss
 * .........................----:://+ossyyhhhhhysso+//-.......-/:/oyyhhhhyyyhhhhhhh
 * -.............-----......-.----::///+oosssso++//::..```````..+osssssssssssssooss
 * ----.--------------------.....----::://++///:::--.````````````:+ooooooooooo++++o
 * ......................-.........-----:::::::::-.````````````````:/++++++o+++++++
 * ...................-:o-``...........----------.``````````````   ``-:::///:::::::
 * --..............--:+so:```.``................``````````````   `.-::::--:::::::::
 * ------......---:///+s++/.``````...........```````````````  `.-::////:///::::::::
 * ------------:::::::o+////:.`````````...``````````      `.-::///////////////:::::
 * ------:::::::::::/:o+///////:-.`  ` ```````      `..--:://////////////////////::
 * 
 * 
 * 
 * 
 * # Audience
 *   - curious about js event loop
 *   - seen js timers but never fully grokked how they work and play together
 * 
 * # Question
 *   - How can I understand the riddle? 
 *   - How do timers/promises/rxjs/ticks work together?
 * 
 * # Takeaway
 *   - Demystify the event loop timers
 *   - Provide tools to solve the riddle
 */
