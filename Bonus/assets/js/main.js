/*
Bonus:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

const users = [
    {
        name: 'Pasquale',
        surname: 'Aragosa',
        age: 24
    },
    {
        name: 'Matteo',
        surname: 'Aragosa',
        age: 17
    },
    {
        name: 'Angelo',
        surname: 'Aragosa',
        age: 26
    },
    {
        name: 'Biagio',
        surname: 'Aragosa',
        age: 14
    }
];

//let newUsers = [];

// users.forEach((element, index) => {

//     if (users[index].age >= 18) {
//         newMarkup = `${users[index].name} ${users[index].surname} può guidare`;
//         newUsers.push(newMarkup);
//     } else {
//         newMarkup = `${users[index].name} ${users[index].surname} non può ancora guidare`;
//         newUsers.push(newMarkup);
//     }
// }
// );

//console.log(newUsers);

let yesDrivers = users.filter(element => element.age >= 18);
let noDrivers = users.filter(element => element.age < 18);

console.log(yesDrivers);
console.log(noDrivers);