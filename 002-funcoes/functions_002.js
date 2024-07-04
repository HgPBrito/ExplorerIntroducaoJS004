//function anonymous
//function expression
const sum = function(number1, number2) {
    let total = number1 + number2;
    return total;
}

let number1 = 34;
let number2 = 26;
console.log(`o numero 1 é ${number1}`);
console.log(`o numero 2 é ${number2}`);
console.log(`a soma é ${sum(number1, number2)}`);
sum(number1, number2);


function fazerSuco (fruta1, fruta2) {
    return 'Suco de: ' + fruta1 + ' e ' + fruta2;
}

const copo = fazerSuco('banana', 'maçã');

console.log(copo);


//function scope

let subject1 = 'create video';

function createThink(subject1) {
    subject1 = 'study';
    return subject1
}


console.log(createThink(subject1));
console.log(subject1);

let subject2 = 'create video';

function createThink() {
    subject2 = 'study';
    return subject2
}


console.log(createThink(subject2));
console.log(subject2);

let subject3;

function createThink() {
    subject3 = 'study';
    return subject3
}


console.log(subject3);
console.log(createThink(subject3));
console.log(subject3);

let subject4 = 'create video';

function createThink(subject4) {
    subject4 = 'study';
    return subject4
}


console.log(subject4);
console.log(createThink(subject4));
console.log(subject4);

