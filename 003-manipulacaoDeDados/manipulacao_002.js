// Manipulando Arrays

//Criar Array com construtor

let myArray = new Array('a', 'b', 'c');

//Contar elementos de um array
console.log(['a', {type:'array'}, function() {return 'alô'}].length);

console.log(['a', 'b', 'c']);

// transformar string em array

let word1 = 'manipulação';
console.log(Array.from(word1));


let techs = ['html', 'css', 'js'];

//adicionar item no fim do array
tech.push('nodejs');

//adicionar no começo
tech.unshift('sql');

//remover o ultimo
tech.pop();

//remover o primeiro
tech.shift();

//pega elementos selecionados no array
console.log(tech.slice(1, 3));

//remove itens do array em qualquer posição
//tech.splice(1, 2);

//remover especifico
let index = techs.indexOf('css');
techs.splice(index, 1);
console.log(techs);





console.log(tech);