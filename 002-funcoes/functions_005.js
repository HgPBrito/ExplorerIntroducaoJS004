//callback function - passado uma função dentro de outra função pra ser executada em algum momento

function sayMyName (name) {
    console.log('antes da callback');

    name();
    
    console.log('depois da callback');
}



sayMyName (
    () => {
        console.log('estou em uma callback');
    }
);