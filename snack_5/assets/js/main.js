/*
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra “a” e “b”
*/

function getRange(array, min, max) {
    let result = array.filter(element => (element > min && element <= max));

    return result;
}

const numbers = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9 ,10];
const firstNum = 4;
const secondNum = 10;

console.log(`Gli elementi compresi tra ${firstNum} e ${secondNum} sono `, getRange(numbers, firstNum, secondNum));