// import EventEmitter class 
const EventEmitter = require("events");

// create an instance of EventEmitter 

const emitter = new EventEmitter();

// emitter.on("greet",() => {
// console.log("Hello Guru")
// });

// emitter.emit("greet");



// by using passing arguments 

emitter.on("greet",(user) => {
console.log(`Hello ${user.name} and the profession is ${user.prof}`)
});

emitter.emit("greet", {name:"Guru Dayal", prof:"Developer"});




 






