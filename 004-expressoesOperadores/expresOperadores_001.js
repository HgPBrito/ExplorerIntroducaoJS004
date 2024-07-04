/*
    Expressões e Operadores

        - Expressions
        - Operators
            Binary
            Unary
            Ternary
*/

//função auto executavel
(function() {
    //console.log('alo')
})();

let number = 1;
//console.log(number + 1); //binario entre valores -operador aritimético
//console.log(number ++); //unario
//console.log(typeof number); //unario
//console.log(true ? 'alo' : 'nada'); //ternario


// new - left-hand-side expression - usado para criar um novo objeto

let name = new String('Hugo');
name.surName = 'Brito';
let age = new Number(23);
let date = new Date('2024-07-03');
//console.log(name, age, date);

// typeof ou delete

//console.log(typeof 'texto');

const person = {
    name: 'Hugo',
    age: 31
}
delete person.age;
//console.log(person);

// operadores aritiméticos

//multiplicação *
//console.log(3 * 5);
//console.log(3.2 * 5.5);

//divisão /
//console.log(12 /2);

//soma +
//console.log(34 + 66);

//subtração -
//console.log( 34 - 24);

//resto da divisão %
let remainder = 11 % 9;
//console.log(remainder);

//incremento ++
let increment = 0;
//console.log(increment++);
//console.log(increment);
//console.log(++increment);

//decremento --
let decrement = 0;
//console.log(decrement--);
//console.log(decrement);
//console.log(--decrement);

//exponencial **
//console.log(3 ** 2);

// Grouping operator ( )

let total = 2 + 3 * 5;
//console.log(total);

total = (2 + 3) * 5;
//console.log(total);

//operadores de comparação

let one = 1;
let two = 2;

// == igual a
//console.log(one == 1);
//console.log(two == 1);
//console.log(one == '1');

// != diferente de
//console.log(one != two);
//console.log(one == 1);
//console.log(one != '1');

// === estritamente igual a
//console.log(one === 1);
//console.log(one === '1');

// !== estritamente diferente de
//console.log(two !== '2');
//console.log(two !== 2);

// > Maior que
//console.log(one > two);

// >= Maior igual a
//console.log(one >= 1);
//console.log(two >= 1);

// < Menor que
//console.log(one < two);

// <= Menor igual a
//console.log(one <= two);
//console.log(one <= 1);
//console.log(one <= 0);


//Operadores de atribuição (assignment)
let x;

//assignment
x = 2;

//addition assignment
//x += 2;

//subtraction assignment
//x -= 1;

//multiplication assignment
//x *= 2;

//division assignment
//x /= 2;

//remainder, exponetiation assignment
//x %= 2;
//x **= 2;

//console.log(x);

// Operadores lógicos

let pao = true;
let queijo = false;

// AND &&
//console.log(pao && queijo);


// OR ||
//console.log(pao || queijo);

// NOT !
//console.log(!pao);

//Operador condicional ternários
//condição ? valor1(true) : valor2(false)

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim';
//console.log(niceBreakfast);

let age1 = 16;
const canDrive = age1 >= 18 ? 'can drive' : "can't drive";
//console.log(canDrive);

//Operador de String (String operator)

//comparação
//console.log('a' == 'b');
//console.log('a' == 'a');

//concatenação
let alpha = 'alpha';
//console.log(alpha + 'bet' + 's');
//console.log(alpha += 'bets');
//console.log(alpha);
//console.log(alpha + 345);


/*falsy e truthy

Falsy - valores considerados false em contexto booleano (condicionais e loops)

false
0
-0
""
null
undefined
NaN


Truthy - valores considerados true em contexto booleano (condicionais e loops)

true
{}
[]
1
3.23 (qualquer numero maior que 0)
"0" (qualquer string com conteudo)
"false" (qualquer string com conteudo)
-1
Infinity
-Infinity

*/

//console.log(0 ? 'verdadeiro' : 'falso');
//console.log(-0 ? 'verdadeiro' : 'falso');
//console.log("" ? 'verdadeiro' : 'falso');
//console.log(null ? 'verdadeiro' : 'falso');
//console.log(undefined ? 'verdadeiro' : 'falso');
//console.log(NaN ? 'verdadeiro' : 'falso');

//console.log({} ? 'verdadeiro' : 'falso');
//console.log([] ? 'verdadeiro' : 'falso');
//console.log(1 ? 'verdadeiro' : 'falso');
//console.log(7.56 ? 'verdadeiro' : 'falso');
//console.log('0' ? 'verdadeiro' : 'falso');
//console.log('false' ? 'verdadeiro' : 'falso');
//console.log(-1 ? 'verdadeiro' : 'falso');
//console.log(Infinity ? 'verdadeiro' : 'falso');
//console.log(-Infinity ? 'verdadeiro' : 'falso');


/* Operator precedence

Grouping                    ()
Negações e Incrementos      ! ++ --
Multiplicação e Divisão     * /
Adição e Subtração          + -
Relacional                  < <= > >=
Igualdade                   == != === !==
AND                         &&
OR                          ||
Condicional                 ?:
Atribuição                  = += -= *= ...

*/

//console.log(2 + 5 * 10);
//console.log((2 + 5) * 10);
console.log(3 > 2 == 1); // 3>2 é true e true == 1(true por causa do Truthy)








