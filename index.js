// https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick
// https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#poll
const fs = require('fs');
setTimeout(() => console.log("[Timer]: Timer 1 finished"), 0);//2
setImmediate(() => console.log("[Immediate]: Immediate 1 finished"));//4

fs.readFile("test.txt", () => {
    console.log("[I/O]: File read finished");//3
    setTimeout(() => console.log("[Timer]: Timer 2 finished"), 0);//6
    setTimeout(() => console.log("[Timer]: Timer 3 finished"), 3000);//7
    setImmediate(() => console.log("[Immediate]: Immediate 2 finished"));//5
});

console.log("[top-level-code]: Hello from top-level-code finished");//1