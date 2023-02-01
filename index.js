// https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick
// https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#poll
const fs = require('fs');
setTimeout(() => console.log("[Timer]: Timer 1 finished"), 0);//2
setImmediate(() => console.log("[Immediate]: Immediate 1 finished"));//5

fs.readFile("test.txt", () => {
    console.log("[I/O]: File read finished");//3
    console.log("========================")
    setTimeout(() => console.log("[Timer]: Timer 2 finished"), 0);//7
    setTimeout(() => console.log("[Timer]: Timer 3 finished"), 3000);//8
    setImmediate(() => console.log("[Immediate]: Immediate 2 finished"));//6
    process.nextTick(() => console.log("[nextTick]: NextTick 1 finished it executed between phases as it's microtask"));//4
});

console.log("[top-level-code]: Hello from top-level-code finished");//1