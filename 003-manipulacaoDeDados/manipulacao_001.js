/*
    Prototype

        JS é uma linguagem baseada em protótipos;
        Existe uma cadeia de prototipos - prototype chain;
        __proto__ objeto acendente;

        conhecer os atributos e metodos dos __proto__
*/

"hugo".__proto__;

23.0.__proto__;

/*
    Type conversion (typeCasting) eu altero explicitamente vs Type coersion implicitamente o JS fará por baixo dos panos

    alteração do tipo de dado para outro tipo
*/

console.log('9' + 5); // coersion transformou o 5 em string para contatenar
console.log(Number('9') + 5); // typeCasting transformei o 9 em number para somar

let word1 = '123';
console.log(Number(word1));

let number1 = 321;
console.log(String(number1));

// contar quantos caracteres tem uma string ou um numero

let word2 = 'Paralelepipedo';
console.log(word2.length);

let number2 = 1234;
console.log(String(number2).length);

// formatar numero decimal p/ 2casas decimais e trocar ponto por virgula

let number3 = 345.33452345;
console.log(number3.toFixed(2).replace('.', ','));

//transformar letras em mayusculas e depois em minusculas

let word3 = 'Programar é muito bacana!';
console.log(word3.toUpperCase());
console.log(word3.toLowerCase());

//Separar texto e fazer substituição de caracteres

let phrase = 'Eu quero viver o Amor!';

let myArray = phrase.split(' ');

let phraseWithUnderscore = myArray.join('_');

console.log(phraseWithUnderscore.toLowerCase());

// verificar se uma string tem uma sequencia de caracteres

console.log(phrase.includes('Amor'));