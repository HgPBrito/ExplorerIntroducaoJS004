//Control flow (controle de fluxo) - padrão é linha a linha de cima para baixo

//console.log('a');
//console.log('b');


//if ... else

let temperature = 36.5;
let highTemperature = temperature >= 37.5;
let mediumTemperature = temperature < 37.5 && temperature >= 37;

if(highTemperature) {
    //console.log('Está com Febre Alta!');
} else if(mediumTemperature) {
    //console.log('Está com Febre Moderada!');    
} else {
    //console.log('Está Sauldável!');
}

// switch

function calculate(number1, operator, number2){

    let result = 0;
    
    switch (operator) {
        case '+' :
            result = number1 + number2;
            break;

        case '-' :
            result = number1 - number2;
            break;

        case '*' :
            result = number1 * number2;
            break;

        case '/' :
            result = number1 / number2;
            break;

        default :
            console.log('Não Implementado!');
            break;
    }

    return result;
}

//console.log(calculate(4, '+', 2));
//console.log(calculate(4, '-', 2));
//console.log(calculate(4, '*', 2));
//console.log(calculate(4, '/', 2));
//console.log(calculate(4, '**', 2));



//trow  

function sayMyName(name) {
    if(name === ''){
        throw new Error('O nome é obrigatório!');
    } else {
        console.log(name);
    }
    console.log('Fim da função.');    
}

//try ... catch
try {

    sayMyName('');
    console.log('Rodando a Aplicação.');  

} catch(e) {
    console.log(e);
}

console.log('Fim da Aplicação.');  