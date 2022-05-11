// genera un array di 10 numeri casuali range 1- 100, ma stavolta senza doppioni

const myArray = [];

// let i = 0;
while (myArray.length < 10) {
    let randomNum = (Math.floor(Math.random() * 100) +1);
    
    if (!myArray.includes(randomNum)) {
        myArray.push(randomNum)
    }
}

console.log(myArray);