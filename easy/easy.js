//EASY: Write a function that would allow you to do this:

// var run = exercise('running');

// console.log(run()); // prints "Today's exercise: running"

// var swim = exercise('swimming');

// console.log(swim()); // prints "Today's exercise: swimming"
const exercise = a => {
    return function(){
        return `todays exercise is ${a}`
    }  
};

//VARIABLE FOR RUNNING
let run = exercise("RUNNING")

//VARIABLE FOR SWIMMING
let swim = exercise("SWIMMING")

//PRINT RUN
console.log(run())

//PRINT SWIM
console.log(swim())
