/* 
Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC)
*/

function getString(word) {
    let invertWord = [];
    let result;
    
    for (let i = (word.length - 1); i >= 0; i--) {
        //console.log(word.charAt(i));
        invertWord.push(word.charAt(i));
    }

    result = invertWord.toString();
    //console.log(invertWord);
    return result;
}

const stringWord = prompt('Digita una parola');
console.log(getString(stringWord));