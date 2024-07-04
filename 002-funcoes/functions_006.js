/*Function constructor

    - Criada com a primeira letra Maiúscula (boa prática)
    - Precisa ser instanciada com new
    - 
*/
function Person(name) {
    this.name = name;
    this.walk = function() {
        return this.name + " está andando..."
    }

}

const hugo = new Person('Hugo');
const joao = new Person('João');

console.log(hugo.walk());
console.log(joao.walk());