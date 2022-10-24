/*
Crea un array di 10 oggetti che rappresentano una zucchina, indicando
per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
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
        height: 22
    },
    {
        kind: 'fiorentino',
        weight: 0.7,
        height: 21
    },
    {
        kind: 'napoletana',
        weight: 1,
        height: 23
    },
    {
        kind: 'tonda',
        weight: 0.9,
        height: 24
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
        height: 20
    }
];

function sum(array) {
    let counter = 0;

    array.forEach(element => {
        counter += element.weight;
    });

    return counter;
}

const result = sum(courgette);
console.log(`Weight: ${result.toFixed(3)} Kg`);

