// MEDIUM: Write a function that would allow you to do this:

// var sharePizza = cutPizzaSlices(8);

// console.log(sharePizza(2));                                                                                                                                                                    

//   // prints "Each person gets 4.00 slices of pizza"

// console.log(sharePizza(3)); 

//   // prints "Each person gets 2.67 slices of pizza"

const cutPizzaSlices = amountOfSlices => {
    return function(numberOfPeople){
        const sharedSlices = amountOfSlices / numberOfPeople
        return `Each person gets ${sharedSlices.toFixed(3)} slices of pizza`
    }
}

var sharePizza = cutPizzaSlices(8)

// prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(2));

// prints "Each person gets 2.67 slices of pizza"
console.log(sharePizza(3));