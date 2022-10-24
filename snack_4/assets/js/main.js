/*
Scrivi una funzione che fonda due array (aventi lo stesso numero di
elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

function mergeArray(array1, array2) {
    let newArray = [];

    // for (let i = 0; i < array1.length; i++) {
    //     newArray.push(array1[i]);
    //     newArray.push(array2[i]);
    // }

    array1.forEach(index => {
        newArray.push(array1[index - 1]);
        newArray.push(array2[index - 1]);
    });

    return newArray;
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12 , 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 , 26];
const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const result = mergeArray(num, alpha);

console.log('New combine array: ', result);