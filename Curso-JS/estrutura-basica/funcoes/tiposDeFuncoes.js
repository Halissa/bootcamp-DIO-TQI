/*Estrutura*/

function nome(parametros) {
    //instruções
    return 0;
}



/*Função Anônima - sem nome, armazenam
o seu valor em uma variável ou constante*/

let soma1 = function (a, b) {
    return a + b;
}



/*Função autoinvocável IIFE - função anônima
entre parênteses seguida por outro par de 
parênteses, que representa sua chamada*/

let soma2 = (function(a, b) {return a + b;})(1, 2);

let soma3 = (
    function(a, b) {
        return a + b;
    }
)(1, 2);



/*Callbacks - função passada como argumento para
outra. Utilizada para proporcionar maior controle
na ordem de chamadas */

let calc = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

let soma = function(num1, num2) {
    return num1 + num2;
}

let subtr = function(num1, num2) {
    return num1 - num2;
}

let resultSoma = calc(soma, 1, 2);
let resultSubtr = calc(subtr, 1, 2);


/*Arrow function -
Função que permite um retorno implicito sem necessidade 
de usar a palavra return. Abaixo temos o exemplo com 2
parametros */
const sum = (a, b) => a + b;
// console.log(sum(4, 6));


/*Arrow function -
Exemplo com 1 parametro*/
const num = a => a;
// console.log(num(5));

