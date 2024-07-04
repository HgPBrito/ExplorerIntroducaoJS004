//function hoisting

sayMyName001();

function sayMyName001() {
    console.log('Hugo001');
}


//sayMyName002(); //não acontece pois esta dentro de uma variavel

var sayMyName002 = function() {
    console.log('Hugo002');
}

sayMyName002();