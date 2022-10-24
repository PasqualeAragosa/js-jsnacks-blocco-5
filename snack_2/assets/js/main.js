/*
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

const courgette = [
    {
        kind: 'nera',
        weight: 0.8,
        height: 20
    },
    {
        kind: 'verde',
        weight: 0.6,
        height: 16
    },
    {
        kind: 'chiara',
        weight: 1.2,
        height: 25
    },
    {
        kind: 'romanesco',
        weight: 0.9,
        height: 12
    },
    {
        kind: 'fiorentino',
        weight: 0.7,
        height: 21
    },
    {
        kind: 'napoletana',
        weight: 1,
        height: 13
    },
    {
        kind: 'tonda',
        weight: 0.9,
        height: 14
    },
    {
        kind: 'gialla',
        weight: 0.5,
        height: 15
    },
    {
        kind: 'trombetta',
        weight: 0.6,
        height: 18
    },
    {
        kind: 'pugliese',
        weight: 0.8,
        height: 10
    }
];

function sumWeight(array) {
    let counter = 0;

    array.forEach(element => {
        counter += element.weight;
    });

    return counter;
}

function getHigher(array) {
    let newArray = [];

    array.forEach(element => {
        if (element.height >= 15) {
            newArray.push(element);
        }
    });

    //console.log('New array higher: ', newArray);
    return newArray;
}

function getLower(array) {
    let newArray = [];

    array.forEach(element => {
        if (element.height < 15) {
            newArray.push(element);
        }
    });

    //console.log('New array lower: ', newArray);
    return newArray;
}

let higher = getHigher(courgette);
let lower = getLower(courgette);
//console.log('New array higher: ', higher);
//console.log('New array lower: ', lower);

console.log(`Higher: ${sumWeight(higher).toFixed(3)} Kg`);
console.log(`Lower: ${sumWeight(lower).toFixed(3)} Kg`);