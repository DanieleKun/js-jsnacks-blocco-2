// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

const userArray = [];
let sumUserArray = 0;

do {
    let userNum = parseInt(prompt("Inserisci un numero"));
    userArray.push(userNum);

    sumUserArray += userNum;

} while (sumUserArray < 50);

console.log(userArray);